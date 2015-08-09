class IssueComment < ActiveRecord::Base
  belongs_to :issue
  belongs_to :user

  def package_info
    {id: self.id, content: self.content, user: self.user.first_name}
  end
end
