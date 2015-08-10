class Category < ActiveRecord::Base
  has_many :categories_issues

  has_many :issues, through: :categories_issues
end
