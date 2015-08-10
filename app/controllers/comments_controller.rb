class CommentsController < ApplicationController

  def show
  end

  def issue_create
    issue = Issue.find_by(id: params[:issue_id])
    comment = IssueComment.create(issue_id: params[:issue_id], user_id: current_user.id, content: params[:content])

    if request.xhr?
      render '/comments/comment_partial'
    else
      redirect_to issue_path(params[:issue_id])
    end
  end

  def issue_destroy

  end

  def fix_create
    p "*"*100
    p "SUCCESS!"
    p "*"*100
    p params
    p "*"*100

    fix = Fix.find_by(id: params[:id])
    comment = FixComment.create(fix_id: params[:issue_id], user_id: current_user.id, content: params[:content])

    if request.xhr?
      render '/comments/comment_partial'
    else
      redirect_to fix_path(params[:id])
    end
  end

  def fix_destroy

  end

end
