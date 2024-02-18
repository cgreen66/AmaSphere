@carts.each do |cart|
  json.set! cart.id do
    json.extract! cart, :id, :quantity, :product_id, :user_id
  end
end

# json.array! @carts do |cart|
#   json.extract! cart, :id, :quantity, :product_id, :user_id
# end