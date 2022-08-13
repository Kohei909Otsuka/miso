module Resolvers
  class CarStatResolver < GraphQL::Schema::Resolver
    type Types::CarStatType, null: false

    def resolve
      query= <<-SQL
      SELECT
        MIN(height) as height_min,
        MAX(height) as height_max,
        MIN(width) as width_min,
        MAX(width) as width_max,
        MIN(length) as length_min,
        MAX(length) as length_max,
        MIN(luggage_size) as luggage_size_min,
        MAX(luggage_size) as luggage_size_max,
        MIN(zero_to_hundred) as zero_to_hundred_min,
        MAX(zero_to_hundred) as zero_to_hundred_max,
        MIN(max_speed) as max_speed_min,
        MAX(max_speed) as max_speed_max,
        MIN(max_torque) as max_torque_min,
        MAX(max_torque) as max_torque_max,
        MIN(fuel_consumption) as fuel_consumption_min,
        MAX(fuel_consumption) as fuel_consumption_max
      FROM cars
      ;
      SQL


      res = ActiveRecord::Base.connection.select_all(query).to_a.first
      OpenStruct.new(res)
    end
  end
end
