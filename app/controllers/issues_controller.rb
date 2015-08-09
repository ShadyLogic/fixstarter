class IssuesController < ApplicationController

  def show
    if @issue = Issue.find_by(id: params[:id])
      @fixes = @issue.fixes
      @comments = @issue.issue_comments.map { |comment| comment.package_info }
    else
      redirect_to welcome_index_path
    end
  end

  def new
  end

end
