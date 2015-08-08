class WelcomeController < ApplicationController
  def index
    @stream_issues = Issue.package_stream_issues
  end

  def show
     @stream_issues = Issue.package_stream_issues
    if current_user
      render 'welcome/show'
    else
      redirect_to registerlogin_path
    end
  end

  def discover
  end

  def register_login
    @stream_issues = Issue.package_stream_issues
  end

end
`
