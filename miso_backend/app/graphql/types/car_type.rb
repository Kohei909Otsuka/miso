module Types
  class CarType < Types::BaseObject
    field :id, ID, null:false
    field :name, String, null:false
    field :slug, String, null:false
    field :score, Int, null: false
    field :height, Float, null: true
    field :width, Float, null: true
    field :length, Float, null: true
    field :luggage_size, Int, null: true
    field :zero_to_hundred, Float, null: true
    field :max_speed, Int, null: true
    field :max_torque, Int, null: true
    field :fuel_consumption, Float, null: true
    field :image_url, String, null: true

    def image_url
      object.images.first&.url
    end
  end
end
