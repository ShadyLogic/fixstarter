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
    @issues = Issue.all
    @open_issues = Issue.package_open_issues
  end

  def register_login
    @stream_issues = Issue.package_stream_issues
  end

  def image
    # calls the image upload method in the image upload concern
    image_url = upload_image
    redirect_to image_url
  end

end
