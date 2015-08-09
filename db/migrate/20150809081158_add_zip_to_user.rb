class AddZipToUser < ActiveRecord::Migration
  def change
    add_column :users, :zip, :string
  end
end
