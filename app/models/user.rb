class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable
  has_many :issues_watches
  has_many :fix_comments
  has_many :fixes
  has_many :issue_comments
  has_many :users_votes
  has_many :issues
  has_many :communities, through: :issues
  has_one :badge_collection

  def full_name
    "#{self.first_name} #{self.last_name}"
  end

end
