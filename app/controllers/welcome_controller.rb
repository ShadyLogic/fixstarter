class WelcomeController < ApplicationController

  def index # splash page (root_path)
    @stream_issues = Issue.package_stream_issues
  end


  def show  # dashboard
    @stream_issues = Issue.package_stream_issues
    @all_open_issues = Issue.package_open_issues
    if current_user
      @zip = current_user.zip
      render 'welcome/show'
    else
      redirect_to root_path
    end
  end


  def discover
  end

  def register_login
    @stream_issues = Issue.package_stream_issues
  end

end
