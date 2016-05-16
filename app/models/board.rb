class Board < ActiveRecord::Base
  self.primary_key = 'name'

  has_many :tread
end
