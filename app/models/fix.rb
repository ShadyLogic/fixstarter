class Fix < ActiveRecord::Base
  has_many :fix_comments
  belongs_to :issue
  belongs_to :user
end
