module ImageUploadConcern

  extend ActiveSupport::Concern

  def upload_image
    file = Base64.encode64(params[:image].tempfile.open.read)

    body = { 'image' => file }
    headers = { "Authorization" => "Client-ID " + ENV['IMGUR_CLIENT_ID']}

    response = HTTParty.post('https://api.imgur.com/3/image',
                        :body => body,
                        :headers => headers)

    image_url = response["data"]["link"]

    return image_url
  end

  def contains_image?
    !params[:image].nil?
  end

end
