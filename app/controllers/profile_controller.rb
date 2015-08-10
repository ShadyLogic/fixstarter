class ProfileController < ApplicationController

  def show
    redirect_to "/users/#{current_user.id}"
  end

  def edit
  end

  def update
    user = User.find_by(id: current_user.id)
    user.update_attributes(profile_params)

  private
  #permit params...
  end

end
