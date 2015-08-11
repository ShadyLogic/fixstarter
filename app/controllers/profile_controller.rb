class ProfileController < ApplicationController

  protect_from_forgery with: :null_session, if: Proc.new { |c| c.request.format == 'application/json' }

  def show
    redirect_to "/users/#{current_user.id}"
  end

  def edit
    @user = User.find_by(id: current_user.id)
  end

  def update
    user = User.find(current_user.id)
    p profile_params
    user.update_attributes(profile_params)

    redirect_to "/users/#{current_user.id}"
  end

  private
  def profile_params
    params.require(:user).permit(:email, :bio, :first_name, :last_name)
  end

end
