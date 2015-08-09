class FixesController < ApplicationController

  def show
    if @fix = Fix.find_by(id: params[:id])
      @issue = @fix.issue
      @comments = @fix.fix_comments.map { |comment| comment.package_info }
    else
      redirect_to welcome_index_path
    end
  end

  def new
    @issue = Issue.find(params[:issue_id])
  end

  def create
    p "**************"
    # p params
    p current_user
    issue = params[:issue_id]
    @fix = Fix.new(fix_params)
    # current_user.fixes << @fix
    @fix.save
    redirect_to "issues/#{issue}"
  end

  def fix_params
    params.permit(:title, :description)
  end

end
