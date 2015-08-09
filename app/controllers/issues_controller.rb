class IssuesController < ApplicationController

  def show
    @issue = Issue.find_by()
  end

  def new
  end

  def create
    @issue = Issue.new(issue_params)
    @issue.save
  end

  def issue_params
    params.permit(:title, :description)
    # params.permit(:title, :description, :zip, :image)
  end

end
