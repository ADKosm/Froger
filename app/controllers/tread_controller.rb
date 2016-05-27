class TreadController < ApplicationController

  skip_before_filter :verify_authenticity_token

  impressionist :actions => [:show]

  def create
    @tread = Tread.new(board_id: params[:board_id] , name: params[:name])
    @tread.save

    @post = Post.new(text: params[:text], subject: params[:subject], image: params[:file], tread_id: @tread.id, is_base: true)
    @post.save

    head :no_content
  end

  def show
    @postOffset = params[:page].to_i
    @tread = Tread.find(params[:tread_id])

    impressionist(@tread)
  end

  def number
    render json: {
        number: Tread.find(params[:tread_id]).post.count-1,
        limit: Post.limit
    }
  end

  def views
    @tread = Tread.find(params[:tread_id])

    render json: {
        views: @tread.views
    }
  end

  def viewed
    @treads = Tread.all.sort_by{|a| -a.views}[0, 10]

    render json: @treads
  end

  def commented
    @treads = Tread.all.limit(10).order(updated_at: :desc)

    render json: @treads
  end

end
