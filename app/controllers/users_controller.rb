class UsersController < ApplicationController

  def show
    @user = User.find_by(id: params[:id])

    @same_user = false

    if @user.id == current_user.id
      @same_user = true
    end

    @issues = @user.issues.map { |issue| issue.package_info}
    @fixes = @user.fixes.map { |fix| fix.package_info}
    @watches = @user.issues_watches.map { |watches| watches.package_info}
  end

  def my_profile
    redirect_to "/users/#{current_user.id}"
  end

  def create_watch
    new_watch = IssuesWatch.create(user_id: params[:user_id], issue_id: params[:issue_id])
    redirect_to issue_path(id: params[:issue_id])
  end

  def delete_watch
    watch_to_delete = IssuesWatch.find_by(user_id: params[:user_id], issue_id: params[:issue_id])
    watch_to_delete.destroy
    redirect_to issue_path(id: params[:issue_id])
  end

  def create_bump

  end

  def delete_bump

  end

end
