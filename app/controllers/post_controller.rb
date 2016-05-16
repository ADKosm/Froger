class PostController < ApplicationController

  skip_before_filter :verify_authenticity_token

  def create
    @post = Post.new(subject: params[:subject], text: params[:text], reply_to: params[:reply_to], image: params[:file] ,is_base: false)
    tread = Post.find(params[:reply_to]).tread
    @post.tread_id = tread.id
    @post.save

    render json: tread
  end
end
