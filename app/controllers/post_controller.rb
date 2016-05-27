class PostController < ApplicationController

  skip_before_filter :verify_authenticity_token

  def create
    @post = Post.new(subject: params[:subject], text: params[:text], reply_to: params[:reply_to], image: params[:file] ,is_base: false)
    tread = Post.find(params[:reply_to]).tread
    @post.tread_id = tread.id
    @post.save
    tread.updated_at = @post.created_at
    tread.save

    render json: tread
  end

  def show
    @post = Post.find(params[:post_id])
  end
end
