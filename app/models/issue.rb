class Issue < ActiveRecord::Base
  has_many :issues_watches
  has_many :fixes
  has_many :fix_comments, through: :fixes
  has_many :issue_comments
  has_many :users_votes
  belongs_to :user
  belongs_to :community
  has_many   :categories_issues
  has_many   :categories, through: :categories_issues

  CATEGORIES = {
    "None" => 'circle-stroked',
    "Heavy" => 'square-stroked',
    "Very Heavy" => 'square',
    "Dirty" => 'waste-basket',
    "Tools" => 'logging',
    "Yard Work & Removal" => 'garden',
    "General Handyman" => 'pitch',
    "Escalate" => 'police'
  }


  def self.assign_category(issue)
    unless issue.categories.empty?
      issue.categories.first.name
    else
      "None"
    end
  end


  def self.package_stream_issues
    stream_items = []
    self.last(4).each do |issue|
      category = Issue.assign_category(issue)
      stream_items << {id: issue.id,
                       title: issue.title,
                       description: issue.description,
                       username: issue.user.full_name,
                       latitude: issue.latitude,
                       longitude: issue.longitude,
                       imageUrl: issue.image_url,
                       category_icon: CATEGORIES[category],
                       category_name: category,
                       points: issue.users_votes.size
                       }
    end
    # show latest streams first (with reverse)
    stream_items.reverse
  end


  def self.package_open_issues
    issue_items = []
    self.all.each do |issue|
      unless issue.status == 'closed'
        issue_items << Issue.packaged_issue(issue)
      else
        category = Issue.assign_category(issue)
        issue_items << {  id: issue.id,
                          title: issue.title,
                          description: 'This issue has been fixed!',
                          latitude: issue.latitude,
                          longitude: issue.longitude,
                          fix_text: 'Check out the fix!',
                          link: "/issues/#{issue.id}",
                          color: '989898',
                          category_icon: CATEGORIES[category],
                          category_name: category,
                          points: issue.users_votes.size }

      end
    end
    issue_items
  end


  def self.package_latest_issue
    [] << Issue.packaged_issue(self.last)
  end


  # THE Below method does NOT return an array, but a hash.
  def package_as_fixed
    category = Issue.assign_category(self)
    {  id: self.id,
       title: self.title,
       description: 'This issue has been fixed!',
       latitude: self.latitude,
       longitude: self.longitude,
       fix_text: 'Check out the fix!',
       link: "/issues/#{self.id}",
       color: '989898',
       category_icon: CATEGORIES[category],
       category_name: category,
       points: self.users_votes.size  }
  end


  # TODO: write out this method filtering out search results -- omg this method is stoopid
  def self.package_issues_containing(keyword, category)
    issues = self.all
    if category == "None"
      issues = issues.select { |issue| issue.title.downcase.include?(keyword.downcase) ||
      issue.description.downcase.include?(keyword.downcase) }

    elsif keyword == ""
      issues = issues.select { |issue| issue.categories.map { |cat| cat.name }.include?(category) }

    else
      issues = issues.select { |issue| issue.title.downcase.include?(keyword.downcase) ||
      issue.description.downcase.include?(keyword.downcase) }
      issues = issues.select { |issue| issue.categories.map { |cat| cat.name }.include?(category) }
    end

    found_issues = []
    issues.each do |issue|
      unless issue.status == 'closed'
        found_issues << Issue.packaged_issue(issue)
      end
    end
    return found_issues
  end


  def self.package_discover_issues
    issue_items = []
    self.all.each do |issue|
      unless issue.status == 'closed'
        issue_items << Issue.packaged_issue(issue)
      end
    end
    issue_items
  end

  def self.assign_image(issue)
    unless issue.image_url == nil
      issue.image_url
    else
      "http://www.scoopstake.com/assets/images/campaigns/no-photo.gif"
    end
  end

  def self.packaged_issue(issue)
    category = Issue.assign_category(issue)
    image = Issue.assign_image(issue)
    { id: issue.id,
      title: issue.title,
      description: issue.description,
      latitude: issue.latitude,
      longitude: issue.longitude,
      fix_text: 'Fix It!',
      link: "/issues/#{issue.id}",
      color: '0044FF',
      category_icon: CATEGORIES[category],
      category_name: category,
      points: issue.users_votes.size,
      image: image }
  end

  def package_info
    {id: self.id, user_id: self.user_id, title: self.title, image_url: self.image_url, status: self.status, upvotes: self.users_votes.size}
  end

end
