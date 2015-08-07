class CreateIssuesComments < ActiveRecord::Migration
  def change
    create_table :issues_comments do |t|
      t.integer :issue_id
      t.integer :user_id
      t.text :content

      t.timestamps null: false
    end
  end
end
