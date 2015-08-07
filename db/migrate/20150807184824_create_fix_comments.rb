class CreateFixComments < ActiveRecord::Migration
  def change
    create_table :fix_comments do |t|
      t.integer :fix_id
      t.integer :user_id
      t.text :content

      t.timestamps null: false
    end
  end
end
