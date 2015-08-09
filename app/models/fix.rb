class Fix < ActiveRecord::Base
  has_many :fix_comments
  belongs_to :issue
  belongs_to :user

  def package_info
    {id: self.id, user_id: self.user_id, issue_id: self.issue_id, title: self.title, image_url: self.image_url}
  end

end
