module BadgeConcern

  extend ActiveSupport::Concern

  def check_fix_badges
    current_user.badge_collection.first_fix = true
    if current_user.fixes.length >= 5
      current_user.badge_collection.five_fixes = true
    end
    current_user.badge_collection.save
  end

  def check_issue_badges
    current_user.badge_collection.first_issue = true
    if current_user.issues.length >= 5
      current_user.badge_collection.five_issues = true
    end
    unless current_user.badge_collection.category_king
      issues = current_user.issues
      categories = issues.map { |issue| issue.categories }
      category_names = categories.flatten.map { |category| category.name }
      category_names = category_names.uniq
      category_names.delete("Uncategorized")
      if category_names.length >= 7
        current_user.badge_collection.category_king = true
      end
    end
    current_user.badge_collection.save
  end

  def check_issue_comment_badges
    current_user.badge_collection.issue_comment = true
    current_user.badge_collection.save
  end

  def check_fix_comment_badges
    current_user.badge_collection.fix_comment = true
    current_user.badge_collection.save
  end

  def check_profile_badges
    unless current_user.full_name == "Good Samaritan"
      current_user.badge_collection.unanonymous = true
    end
    current_user.badge_collection.save
  end

  def check_misc_badges
    unless current_user.badge_collection.issue_fixed
      issues = current_user.issues
      issues.each do |issue|
        if issue.fixes.length > 0
          current_user.badge_collection.issue_fixed = true
        end
      end
    end
    unless current_user.badge_collection.five_point_issue
      issues = current_user.issues
      vote_counts = issues.map { |issue| issue.users_votes.length }
      vote_counts.each do |count|
        if count >= 5
          current_user.badge_collection.five_point_issue = true
        end
      end
    end
    current_user.badge_collection.save
  end

end
