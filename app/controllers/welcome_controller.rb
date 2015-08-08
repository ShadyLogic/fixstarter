class WelcomeController < ApplicationController
  def index
    @stream_issues = Issue.package_stream_issues
    p "*********************"
    p "here's the last four stream issues: #{@stream_issues}"
  end

  def show
  end

  def discover
  end

end
