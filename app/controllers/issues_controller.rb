class IssuesController < ApplicationController

  def show
    @issue = Issue.find_by()
  end

end
