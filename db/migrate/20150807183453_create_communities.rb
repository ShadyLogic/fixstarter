class CreateCommunities < ActiveRecord::Migration
  def change
    create_table :communities do |t|
      t.string :title

      t.timestamps null: false
    end
  end
end
