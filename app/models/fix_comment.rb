class FixComment < ActiveRecord::Base
  belongs_to :user
  belongs_to :fix
end
