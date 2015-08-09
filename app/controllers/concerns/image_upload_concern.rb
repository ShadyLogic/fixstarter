module ImageUploadConcern

  extend ActiveSupport::Concern

  def upload_image
    file = Base64.encode64(open(params[:image].tempfile) { |io| io.read })

    body = { 'image' => file }
    headers = { "Authorization" => "Client-ID 3deb91dad34b579" }

    response = HTTParty.post('https://api.imgur.com/3/image',
                        :body => body,
                        :headers => headers)


    image_url = response["data"]["link"]

    return image_url
  end

end
