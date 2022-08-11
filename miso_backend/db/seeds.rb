# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require "csv"
require "ffaker"
puts "scoreが高い5個だけちゃんとつくって、あとはランダムでつくる 全部で100個つくる"

puts "cell phone start"

CSV.foreach(Rails.root.join("db", "data", "cell_phone.csv"), headers: true) do |row|
  cellphone = CellPhone.new(row.to_hash.merge(score: (90..100).to_a.sample))
  cellphone.save!
end

dummy_cellphones = []
95.times do |i|
  name = FFaker::Name.first_name
  dummy_cellphones << {
    name: name,
    slug: SecureRandom.uuid,
    score: (50..80).to_a.sample,
    weight: (150...220).to_a.sample,
    thickness: (7..9).to_a.sample,
    width: (60..80).to_a.sample,
    height: (120...160).to_a.sample,
    screen_size: [6,7,8].sample,
    screen_kind: ["el", "ips"].sample,
    refresh_rate: [60, 90, 120].sample,
    cpu: "snapdragon",
    memory: [4, 6, 8, 12].sample,
    disk: [64, 128, 256, 512].sample,
    is_multi_sim: [true, false].sample,
  }
end
CellPhone.insert_all!(dummy_cellphones)

puts "cell phone end"

puts "car start"
CSV.foreach(Rails.root.join("db", "data", "car.csv"), headers: true) do |row|
  car = Car.new(row.to_hash.merge(score: (90..100).to_a.sample))
  car.save!
end
dummy_cars = []
95.times do |i|
  name = FFaker::Name.first_name
  dummy_cars << {
    name: name,
    slug: SecureRandom.uuid,
    score: (50..80).to_a.sample,
    height: (1200..1500).to_a.sample,
    width: (1700..2000).to_a.sample,
    length: (4500..5000).to_a.sample,
    luggage_size: (300..500).to_a.sample,
    zero_to_hundred: (3..7).to_a.sample,
    max_speed: (100..300).to_a.sample,
    max_torque: (100..500).to_a.sample,
    fuel_consumption: (8..22).to_a.sample,
  }
end
Car.insert_all!(dummy_cars)
puts "car end"
