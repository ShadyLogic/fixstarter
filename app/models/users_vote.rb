class UsersVote < ActiveRecord::Base
  belongs_to :user
  belongs_to :issue
end
