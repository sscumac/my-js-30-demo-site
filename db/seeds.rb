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
challenge_6 = Challenge.create(name: "Type and Filter Dataset", number: 6)
challenge_7 = Challenge.create(name: "Array Cardio #2", number: 7)
challenge_8 = Challenge.create(name: "Colourful HTML Canvas", number: 8)
challenge_9 = Challenge.create(name: "Dev Tool Yoga", number: 9)
challenge_10 = Challenge.create(name: "Hold Shift for Checkboxes", number: 10)
challenge_11 = Challenge.create(name: "Custom Video Player", number: 11)
challenge_12 = Challenge.create(name: "Type the Secret Code", number: 12)
challenge_13 = Challenge.create(name: "Slide in on Scroll", number: 13)
challenge_14 = Challenge.create(name: "Objects/Arrays - Copy vs. Reference", number: 14)
challenge_15 = Challenge.create(name: "LocalStorage and Event delegation", number: 15)
challenge_16 = Challenge.create(name: "Mouse Move Shadow Dance", number: 16)
challenge_17 = Challenge.create(name: "Sort Without Articles", number: 17)
challenge_18 = Challenge.create(name: "Adding Up Times with Reduce", number: 18)
challenge_19 = Challenge.create(name: "Frantic Photo Booth", number: 19)
challenge_20 = Challenge.create(name: "Speech Regognition", number: 20)
challenge_21 = Challenge.create(name: "Highlight Links by Hover", number: 21)
challenge_22 = Challenge.create(name: "Text to Speech", number: 22)
challenge_23 = Challenge.create(name: "Slide into Sticky Nav", number: 23)
challenge_24 = Challenge.create(name: "Bubbling, Capture and Once", number: 24)

