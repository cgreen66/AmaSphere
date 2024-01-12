# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
ApplicationRecord.transaction do
    puts "Destroying tables..."
    User.destroy_all
  
    puts "Resetting primary keys..."
    ApplicationRecord.connection.reset_pk_sequence!('users')
  
    puts "Creating users..."

    # Create a demo user with a name, email, and password
    User.create!(
      name: 'Demo User', 
      email: 'demo@user.io', 
      password: 'password'
    )

    # Create additional users with unique emails
    10.times do
      User.create!({
        name: Faker::Name.name,  # Generates a full name
        email: Faker::Internet.unique.email,
        password: 'password'
      })
    end

    puts "Done!"
end
