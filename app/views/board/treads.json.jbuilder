json.array! @treads do |tr|
  json.partial! 'tread/show_one', tread: tr
end