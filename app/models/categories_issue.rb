class CategoriesIssue < ActiveRecord::Base
  belongs_to :category
  belongs_to :issue
end
