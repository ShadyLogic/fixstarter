class WelcomeController < ApplicationController

  def index # splash page (root_path)
    if user_signed_in?
      redirect_to dashboard_path
    end
    @stream_issues = Issue.package_stream_issues
  end


  def show  # dashboard
    if current_user
      @stream_issues = Issue.package_stream_issues
      @all_open_issues = Issue.package_open_issues
      @zip = current_user.zip
      render 'welcome/show'
    else
      redirect_to root_path
    end
  end


  def discover
    if user_signed_in?
      @issues = Issue.all
      @open_issues = Issue.package_open_issues
      @zip = current_user.zip
    else
      redirect_to root_path
    end
  end

  def register_login
    @stream_issues = Issue.package_stream_issues
  end

  def image
    # calls the image upload method in the image upload concern
    image_url = upload_image
    redirect_to image_url
  end

  # ajax route for discover page
  def search
    @issue_results = Issue.package_issues_containing(params[:keyword], params[:category])
    if params[:location] == ""
      location = "San Francisco"
    else
      location = params[:location]
    end
    render json: {issues: @issue_results, location: location}
  end
end