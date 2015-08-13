class IssuesController < ApplicationController

  # Allows for json post requests to process without the need for a CSRF
  protect_from_forgery with: :null_session, if: Proc.new { |c| c.request.format == 'application/json' }

  def show
    if @issue = Issue.find_by(id: params[:id])
      @address = Geocoder.address("#{@issue.latitude}, #{@issue.longitude}")

      @categories = @issue.categories

      if @categories.empty?

        @category_name = "Uncategorized"

      end

      @fixes = @issue.fixes
      @comments = @issue.issue_comments.map { |comment| comment.package_info }


      @current_user_watching = false
      @current_user = nil

      if user_signed_in?
        @current_user_id = current_user.id
        @current_user = current_user
        if current_user.issues_watches.where(issue_id: @issue.id).size != 0
          @current_user_watching = true
        end
        @current_user_id = current_user.id
      end

      @upvotes = @issue.users_votes.size

      @current_user_upvoted = false
      if user_signed_in?
        if UsersVote.where(issue_id: @issue.id, user_id: @current_user.id).size != 0
          @current_user_upvoted = true
        end
        @current_user_id = current_user.id
      end

      @current_user_created_issue = false
      if user_signed_in?
        if Issue.where(id: @issue.id, user_id: @current_user.id).size != 0
          @current_user_created_issue = true
        end
      end


    else
      redirect_to root_path
    end
  end

  def new
    @categories = Category.all
    return @zip = current_user.zip if user_signed_in?
    redirect_to root_path
  end

  def create
    category_id_array = []
    uncategorized_category = Category.where(name: "Uncategorized").first

    if params[:categories]
      params[:categories].each do |category_id|
        category_id_array << category_id[1].to_i
      end
    end

    @issue = Issue.new(issue_params)
    if contains_image?
      @issue.image_url = upload_image
    else
      @issue.image_url = "http://i.imgur.com/xQyE9HC.png"
    end

    if @issue.save
      unless category_id_array.empty?
        category_id_array.each do |category_id|
          category = Category.find(category_id)
          category.issues << @issue
        end
      else
        uncategorized_category.issues << @issue
      end
    end

    @issue.update_attributes(user_id: current_user.id)

    #Badge Assignment
    check_issue_badges

    # publish event to redis server, sent to dashboard
    Redis.current.publish 'issue-created', Issue.package_latest_issue.to_json
    # publish change to streaming front-page
    Redis.current.publish 'stream', Issue.package_stream_issues.to_json

    redirect_to issue_path(@issue)
  end

  def close_issue
    @issue = Issue.find_by(id: params[:id])
    @issue.status = "closed"
    @issue.save
    render "issues/show"
  end

  def reopen_issue
    @issue = Issue.find_by(id: params[:id])
    @issue.status = "open"
    @issue.save
    render "issues/show"
  end


  private
  def issue_params
    params.require(:issue).permit(:title, :description, :latitude, :longitude)
  end

end
