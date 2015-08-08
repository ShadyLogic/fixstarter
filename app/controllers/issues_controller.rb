class IssuesController < ApplicationController

  def show
    @issue = Issue.find_by(id: params[:id])
    @fixes = @issue.fixes
  end

  def new
  end

end
