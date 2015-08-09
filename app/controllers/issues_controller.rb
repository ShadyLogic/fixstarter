class IssuesController < ApplicationController

  def show
    @issue = Issue.find_by(id: params[:id])
    @fixes = @issue.fixes
    @comments = @issue.issue_comments.map { |comment| comment.package_info }
  end

  def new
  end

end
