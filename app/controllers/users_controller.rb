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

  end

  def delete_watch

  end

  def create_bump

  end

  def delete_bump

  end

end
