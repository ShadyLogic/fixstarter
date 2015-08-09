class AddInfoToUser < ActiveRecord::Migration
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :latitude, :string
    add_column :users, :longitude, :string
    add_column :users, :avatar_url, :string
    add_column :users, :bio, :string
  end
end
