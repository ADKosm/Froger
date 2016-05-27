class Post < ActiveRecord::Base
  belongs_to :tread

  has_attached_file :image
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  cattr_accessor :limit
  @@limit = 5

end
