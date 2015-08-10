Redis.current = if ENV["REDISCLOUD_URL"].present?
  Redis.new(:url => ENV["REDISCLOUD_URL"])
else
  Redis.new(:host => 'localhost', :port=> 6379)
end
