class BoardController < ApplicationController
  def list
    @boards = Board.all.in_groups_of(6, false)
  end

  def show
    @board = Board.find(params[:board_id])
  end

  def treads
    @board = Board.find(params[:board_id])
    @limit = Tread.limit
    @offset = params[:page].to_i
    @treads = @board.tread.offset(@offset*@limit).limit(@limit).order(updated_at: :desc)
  end

  def number
    render json: {
        number: Board.find(params[:board_id]).tread.count,
        limit: Tread.limit
    }
  end
end