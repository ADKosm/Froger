json.(tread, :id, :board_id, :name)
json.base_post tread.base_post, partial: 'post/show', as: :post
json.posts tread.top_posts do |p|
  json.partial! 'post/show', post: p
end