class CreateIssues < ActiveRecord::Migration
  def change
    create_table :issues do |t|
      t.integer  :user_id
      t.integer  :community_id
      t.string   :title
      t.text     :description
      t.string   :image_url
      t.string   :latitude
      t.string   :longitude
      t.string   :status
      t.timestamps null: false
    end
  end
end
