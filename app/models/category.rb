class Category < ActiveRecord::Base
  has_many :categories_issues
end
