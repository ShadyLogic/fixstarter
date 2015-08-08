class WelcomeController < ApplicationController
  def index
    @stream_issues = Issue.package_stream_issues
  end

  def show
  end

  def discover
  end

end
