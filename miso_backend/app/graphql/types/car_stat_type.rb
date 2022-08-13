module Types
  class CarStatType < BaseObject
    field :height_min, Float, null: false
    field :height_max, Float, null: false
    field :width_min, Float, null: false
    field :width_max, Float, null: false
    field :length_min, Float, null: false
    field :length_max, Float, null: false
    field :luggage_size_min, Int, null: false
    field :luggage_size_max, Int, null: false
    field :zero_to_hundred_min, Float, null: false
    field :zero_to_hundred_max, Float, null: false
    field :max_speed_min, Int, null: false
    field :max_speed_max, Int, null: false
    field :max_torque_min, Int, null: false
    field :max_torque_max, Int, null: false
    field :fuel_consumption_min, Float, null: false
    field :fuel_consumption_max, Float, null: false
  end
end
