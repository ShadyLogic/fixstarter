class IssuesController < ApplicationController

  # Allows for json post requests to process without the need for a CSRF
  protect_from_forgery with: :null_session, if: Proc.new { |c| c.request.format == 'application/json' }

  def show
    if @issue = Issue.find_by(id: params[:id])
      @category = @issue.categories

      if @category.empty?
        @category_name = "Uncategorized"
      else
        @category_name = @category.first.name
      end

      @fixes = @issue.fixes
      @comments = @issue.issue_comments.map { |comment| comment.package_info }


      @current_user_watching = false
      if user_signed_in?
        if current_user.issues_watches.where(issue_id: @issue.id).size != 0
          @current_user_watching = true
        end
          @current_user_id = current_user.id
      end


    else
      redirect_to welcome_index_path
    end
  end

  def new
    @categories = Category.all
    return @zip = current_user.zip if user_signed_in?
    redirect_to welcome_index_path
  end

  def create
    category= Category.find(params[:issue][:category])
    @issue = Issue.new(issue_params)
    @issue.image_url = upload_image if contains_image?
    if @issue.save
      category.issues << @issue
    end
    @issue.update_attributes(user_id: current_user.id)
    redirect_to issue_path(@issue)
  end


  private
  def issue_params
    params.require(:issue).permit(:title, :description, :latitude, :longitude)
  end

end
