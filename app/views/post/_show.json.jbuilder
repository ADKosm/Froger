json.(post, :id, :subject, :text, :reply_to)
if post.image.exists?
  json.image post.image.url
end