class Issue < ActiveRecord::Base
  has_many :issues_watches
  has_many :fixes
  has_many :fix_comments, through :fixes
  has_many :issue_comments
  has_many :user_bumps
  belongs_to :user
  belongs_to :community
  has_many :categories_issues
  has_many :categories, through: :categories_issues
end
