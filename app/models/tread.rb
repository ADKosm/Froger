class Tread < ActiveRecord::Base
  belongs_to :board
  has_many :post

  cattr_accessor :limit
  @@limit = 5

  def base_post
    self.post.where(is_base: true)[0]
  end

  def top_posts(offset)
    offset ||= 0
    self.post.where(is_base: false).offset(offset*Post.limit).limit(Post.limit).order(updated_at: :asc)
  end
end
