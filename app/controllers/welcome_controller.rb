class WelcomeController < ApplicationController

  def index # splash page
    @stream_issues = Issue.package_stream_issues
  end


  def show  # dashboard
    @stream_issues = Issue.package_stream_issues
    # if current_user
      render 'welcome/show'
    # else
      # redirect_to register_login_path
    # end
  end


  def discover
  end

  def register_login
    @stream_issues = Issue.package_stream_issues
  end

  def image
    p "*"*100
    p params
    p "*"*100
    p params[:image].tempfile
    p "*"*100

    image_url = upload_image

    redirect_to image_url
  end

end
