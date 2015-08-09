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

    file = Base64.encode64(open(params[:image].tempfile) { |io| io.read })

    body = { 'image' => file }
    headers = { "Authorization" => "Client-ID 3deb91dad34b579"}

    response = HTTParty.post('https://api.imgur.com/3/image',
                        :body => body,
                        :headers => headers)

    p "RESPONSE: #{response}"
    p "*"*100

    image_url = response["data"]["link"]

    p image_url

    redirect_to image_url
  end

end
