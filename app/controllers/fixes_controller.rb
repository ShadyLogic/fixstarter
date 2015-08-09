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
  end

end
