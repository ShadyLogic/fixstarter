class UsersController < ApplicationController

  def show
    @user = User.find_by(id: params[:id])
    @badges = @user.badge_collection

    @same_user = false

    if user_signed_in?
      if @user.id == current_user.id
        @same_user = true
      end
    end

    @issues = @user.issues.map { |issue| issue.package_info}
    @fixes = @user.fixes.map { |fix| fix.package_info}
    @watches = @user.issues_watches.map { |watches| watches.package_info}
  end

  def create_watch
    new_watch = IssuesWatch.create(user_id: params["content"]["user_id"], issue_id: params["content"]["issue_id"])

    redirect_to issue_path(id: params["content"]["issue_id"])
  end

  def delete_watch
    watch_to_delete = IssuesWatch.find_by(user_id: params["content"]["user_id"], issue_id: params["content"]["issue_id"])
    watch_to_delete.destroy

    render "issues/show"
  end

  def create_vote
    up_vote = UsersVote.create(user_id: params["content"]["user_id"], issue_id: params["content"]["issue_id"])
    redirect_to issue_path(id: params["content"]["issue_id"])
  end

  def delete_vote
    vote_to_delete = UsersVote.find_by(user_id: params["content"]["user_id"].to_i, issue_id: params["content"]["issue_id"].to_i)
    vote_to_delete.destroy

    render "issues/show"
  end

end
