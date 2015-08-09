class Issue < ActiveRecord::Base
  has_many :issues_watches
  has_many :fixes
  has_many :fix_comments, through: :fixes
  has_many :issue_comments
  has_many :users_bumps
  belongs_to :user
  belongs_to :community
  has_many   :categories_issues
  has_many   :categories, through: :categories_issues

  def self.package_stream_issues
    stream_items = []
    self.last(4).each do |issue|

      p issue.id
      p issue.user

      stream_items << {id: issue.id,
                      title: issue.title,
                      description: issue.description,
                      username: issue.user.full_name,
                      latitude: issue.latitude,
                      longitude: issue.longitude,
                      imageUrl: issue.image_url }
    end
    stream_items
  end

  def self.package_open_issues
    issue_items = []
    self.all.each do |issue|
      unless issue.status == 'closed'
        issue_items << { id: issue.id,
                          title: issue.title,
                          description: issue.description,
                          latitude: issue.latitude,
                          longitude: issue.longitude,
                          link: "/issues/#{issue.id}" }
      end
    end
    issue_items
  end

  # def package_info
  #   {id: self.id, user_id: self.user_id, fix_id: self.fix_id, content: self.content, user: self.user.first_name}
  # end

end
