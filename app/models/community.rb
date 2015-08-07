class Community < ActiveRecord::Base
  has_many :issues
end
