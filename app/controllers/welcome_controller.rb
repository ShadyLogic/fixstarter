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
    p params[:image].tempfile.open
    p "*"*100

    file = params[:image].tempfile.open

    query = { 'image' => params[:image].tempfile.open }
    headers = { "Authorization" => "Client-ID 3deb91dad34b579"}

    response = HTTParty.post('https://api.imgur.com/3/image',
                        :query => query,
                        :headers => headers)

    p "*"*100
    p response
    p "*"*100

    redirect_to user_path(1)
  end

end
