class ProfileController < ApplicationController

  protect_from_forgery with: :null_session, if: Proc.new { |c| c.request.format == 'application/json' }

  def show
    if user_signed_in?
      redirect_to "/users/#{current_user.id}"
    else
      redirect_to root_path
    end
  end

  def edit
    @user = User.find_by(id: current_user.id)
  end

  def update
    user = User.find(current_user.id)
    user.update_attributes(profile_params)

    if contains_image?
      user.avatar_url = upload_image
      user.save
    end

    redirect_to "/users/#{current_user.id}"
  end

  private
  def profile_params
    params.require(:user).permit(:email, :bio, :first_name, :last_name)
  end

end
