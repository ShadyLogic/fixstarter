class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  include ImageUploadConcern
  include BadgeConcern

  @stream_issues = Issue.package_stream_issues

  protect_from_forgery with: :null_session
end
