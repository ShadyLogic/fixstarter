class IssuesController < ApplicationController

  def show
    @issue = Issue.find_by()
  end

  def new
  end

end
