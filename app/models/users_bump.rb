class UsersBump < ActiveRecord::Base
  belongs_to :user
  belongs_to :issue
end
