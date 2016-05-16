class BoardController < ApplicationController
  def list
    @boards = Board.all.in_groups_of(6, false)
  end

  def show
    @board = Board.find(params[:board_id])
  end

  def treads
    @board = Board.find(params[:board_id])
    @treads = @board.tread.limit(5).order(updated_at: :desc)
  end
end