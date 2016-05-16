json.array! @boards do |bo|
  json.array! bo, :name, :full_name, :description
end