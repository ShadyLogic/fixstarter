class FixComment < ActiveRecord::Base
  belongs_to :user
  belongs_to :fix

  def package_info
    {id: self.id, user_id: self.user_id, fix_id: self.fix_id, content: self.content, user: self.user.first_name}
  end
end
