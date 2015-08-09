class UsersController < ApplicationController

  def show
    @user = User.find_by(id: params[:id])
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
