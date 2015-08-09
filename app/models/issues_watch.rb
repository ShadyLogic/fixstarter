class IssuesWatch < ActiveRecord::Base
  belongs_to :issue
  belongs_to :user

  def package_info
    {id: self.id, issue_id: self.issue_id, issue: self.issue}
  end
end
