class WelcomeController < ApplicationController

  def index # splash page (root_path)
    @splash = true
    @stream_issues = Issue.package_stream_issues
    if user_signed_in?
      redirect_to dashboard_path
    end
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
      @open_issues = Issue.package_discover_issues
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
    if Geocoder.coordinates(params[:location]) == nil
      location = current_user.zip
    else
      location = params[:location]
    end
    @issue_results = Issue.package_issues_containing(params[:keyword], params[:category], location)
    render json: {issues: @issue_results, location: location}
  end

  def about
    render 'welcome/about'
  end

end
