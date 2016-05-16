class TreadController < ApplicationController

  skip_before_filter :verify_authenticity_token

  def create
    @tread = Tread.new(board_id: params[:board_id] , name: params[:name])
    @tread.save

    @post = Post.new(text: params[:text], subject: params[:subject], image: params[:file], tread_id: @tread.id, is_base: true)
    @post.save

    head :no_content
  end

  def show
    @tread = Tread.find(params[:tread_id])
  end
end
