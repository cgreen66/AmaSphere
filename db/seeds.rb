ApplicationRecord.transaction do
  puts "Destroying tables..."
  User.destroy_all
  Product.destroy_all

  puts "Resetting primary keys..."
  ApplicationRecord.connection.reset_pk_sequence!('users')
  ApplicationRecord.connection.reset_pk_sequence!('products')

  puts "Creating users..."
  User.create!(
    name: 'Demo User', 
    email: 'demo@user.io', 
    password: 'password'
  )

  10.times do
    User.create!({
      name: Faker::Name.unique.name,
      email: Faker::Internet.unique.email,
      password: 'password'
    }) 
  end

  puts "Creating products..."
  50.times do
    Product.create!({
      name: Faker::Commerce.product_name,
      description: Faker::Lorem.sentence,
      price: Faker::Commerce.price(range: 0.99..99.99),
      category: Faker::Commerce.department,
      brand: Faker::Company.name,
      dimensions: "#{rand(1..100)}x#{rand(1..100)}x#{rand(1..100)}",
      weight: "#{rand(1..10)}kg"
    })
  end

  puts "Done!"
end
