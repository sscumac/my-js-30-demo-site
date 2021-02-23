# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Destroying database"
Challenge.destroy_all
puts "Database cleaned"
puts "Built new database"

challenge_1 = Challenge.create(name: "Drum Kit", number: 1)
challenge_2 = Challenge.create(name: "CSS Clock", number: 2)
challenge_3 = Challenge.create(name: "Update CSS Variables", number: 3)
challenge_4 = Challenge.create(name: "Array Cardio #1", number: 4)
challenge_5 = Challenge.create(name: "Flex Panel Gallery", number: 5)

