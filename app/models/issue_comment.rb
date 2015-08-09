class IssueComment < ActiveRecord::Base
  belongs_to :issue
  belongs_to :user

  def package_info
    {id: self.id, user_id: self.user_id, issue_id: self.issue_id, content: self.content, user: self.user.first_name}
  end
end
