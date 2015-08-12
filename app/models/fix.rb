class Fix < ActiveRecord::Base
  has_many :fix_comments
  belongs_to :issue
  belongs_to :user

  def package_info
    {id: self.id, user_id: self.user_id, user_first_name: self.user.first_name, user_last_name: self.user.last_name,  issue_id: self.issue_id, title: self.title, image_url: self.image_url}
  end

end
