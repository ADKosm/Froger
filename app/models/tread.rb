class Tread < ActiveRecord::Base
  belongs_to :board
  has_many :post

  is_impressionable

  cattr_accessor :limit
  @@limit = 5

  def base_post
    self.post.where(is_base: true)[0]
  end

  def top_posts(offset)
    offset ||= 0
    self.post.where(is_base: false).offset(offset*Post.limit).limit(Post.limit).order(updated_at: :asc)
  end

  def views
    impressionist_count(:filter => :session_hash, :start_date => Time.now-5.minute)
  end
end
