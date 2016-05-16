class Tread < ActiveRecord::Base
  belongs_to :board
  has_many :post

  def base_post
    self.post.where(is_base: true)[0]
  end

  def top_posts
    self.post.where(is_base: false).limit(5).order(updated_at: :asc)
  end
end
