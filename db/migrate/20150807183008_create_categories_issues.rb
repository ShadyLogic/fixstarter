class CreateCategoriesIssues < ActiveRecord::Migration
  def change
    create_table :categories_issues do |t|
      t.integer :category_id
      t.integer :issue_id

      t.timestamps null: false
    end
  end
end
