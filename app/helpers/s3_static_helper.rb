module S3StaticHelper

  def static_content_url(src)
    "https://s3.eu-central-1.amazonaws.com/webdings-sandbox/static/#{src}"
  end

end