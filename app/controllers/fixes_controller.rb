class FixesController < ApplicationController

  # Allows for json post requests to process without the need for a CSRF
  protect_from_forgery with: :null_session, if: Proc.new { |c| c.request.format == 'application/json' }

  def show
    if @fix = Fix.find_by(id: params[:id], issue_id: params[:issue_id])
      @issue = @fix.issue
      @comments = @fix.fix_comments.map { |comment| comment.package_info }
    else
      redirect_to dashboard_path
    end
  end

  def new
    @issue = Issue.find(params[:issue_id])
  end

  def create
    issue = Issue.find(params[:issue_id])
    @fix = Fix.new(fix_params)
    @fix.image_url = upload_image if contains_image?
    current_user.fixes << @fix
    if @fix.save
      issue.status = "closed"
      issue.save
      Redis.current.publish 'fix-created', issue.package_as_fixed.to_json

      #Badge Assignment
      check_fix_badges
    end
    redirect_to issue_path(id: issue.id)
  end

  def fix_params
    params.permit(:title, :description, :issue_id)
  end

end
