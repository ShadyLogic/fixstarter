class CreateFixes < ActiveRecord::Migration
  def change
    create_table :fixes do |t|
      t.integer :user_id
      t.integer :issue_id
      t.string :title
      t.text :description
      t.string :image_url

      t.timestamps null: false
    end
  end
end
