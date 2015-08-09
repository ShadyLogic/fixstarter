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
    @issue = params[:issue_id]
    @fix = Fix.new(fix_params)
    User.first.fixes << @fix
    # current_user.fixes << @fix  #for when current_user is working
    @fix.save
    redirect_to "issues/#{@issue}"
  end

  def fix_params
    params.permit(:title, :description, :issue_id)
  end

end
