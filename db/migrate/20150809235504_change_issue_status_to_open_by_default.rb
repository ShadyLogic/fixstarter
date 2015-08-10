class ChangeIssueStatusToOpenByDefault < ActiveRecord::Migration
  def change
    change_column :issues, :status, :string, :default => 'open'
  end
end
