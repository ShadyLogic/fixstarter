class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :issue_watches
  has_many :fix_comments
  has_many :fixes
  has_many :issue_comments
  has_many :users_bumps
  has_many :issues
  has_many :communities, through: :issues

  def full_name
    "#{self.first_name} #{self.last_name}"
  end
end
