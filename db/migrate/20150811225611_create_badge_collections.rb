class CreateBadgeCollections < ActiveRecord::Migration
  def change
    create_table :badge_collections do |t|
      t.references :user, index: true, foreign_key: true
      t.boolean :first_issue, default: false
      t.boolean :first_fix, default: false
      t.boolean :five_issues, default: false
      t.boolean :five_fixes, default: false
      t.boolean :issue_fixed, default: false
      t.boolean :five_point_issue, default: false
      t.boolean :category_king, default: false
      t.boolean :issue_comment, default: false
      t.boolean :fix_comment, default: false
      t.boolean :unanonymous, default: false

      t.timestamps null: false
    end
  end
end
