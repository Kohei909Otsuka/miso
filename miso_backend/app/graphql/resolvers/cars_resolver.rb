module Resolvers
  class CarsResolver < GraphQL::Schema::Resolver
    type [Types::CarType], null: false

    argument :height_min, Float, required: false
    argument :height_max, Float, required: false
    argument :width_min, Float, required: false
    argument :width_max, Float, required: false
    argument :length_min, Float, required: false
    argument :length_max, Float, required: false
    argument :luggage_size_min, Int, required: false
    argument :luggage_size_max, Int, required: false
    argument :zero_to_hundred_min, Float, required: false
    argument :zero_to_hundred_max, Float, required: false
    argument :max_speed_min, Int, required: false
    argument :max_speed_max, Int, required: false
    argument :max_torque_min, Int, required: false
    argument :max_torque_max, Int, required: false
    argument :fuel_consumption_min, Float, required: false
    argument :fuel_consumption_max, Float, required: false

    def resolve(**args)
      f = CarFilter.new({
        height_min: args[:height_min],
        height_max: args[:height_max],
        width_min: args[:width_min],
        width_max: args[:width_max],
        length_min: args[:length_min],
        length_max: args[:length_max],
        luggage_size_min: args[:luggage_size_min],
        luggage_size_max: args[:luggage_size_max],
        zero_to_hundred_min: args[:zero_to_hundred_min],
        zero_to_hundred_max: args[:zero_to_hundred_max],
        max_speed_min: args[:max_speed_min],
        max_speed_max: args[:max_speed_max],
        max_torque_min: args[:max_torque_min],
        max_torque_max: args[:max_torque_max],
        fuel_consumption_min: args[:fuel_consumption_min],
        fuel_consumption_max: args[:fuel_consumption_max],
      })
      f.filter
    end
  end
end
