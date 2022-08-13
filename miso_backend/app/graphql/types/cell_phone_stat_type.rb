module Types
  class CellPhoneStatType < BaseObject
    field :weight_min, Float, null: false
    field :weight_max, Float, null: false
    field :thickness_min, Float, null: false
    field :thickness_max, Float, null: false
    field :width_min, Float, null: false
    field :width_max, Float, null: false
    field :height_min, Float, null: false
    field :height_max, Float, null: false
    field :screen_size_min, Float, null: false
    field :screen_size_max, Float, null: false
    field :refresh_rate_min, Int, null: false
    field :refresh_rate_max, Int, null: false
    field :memory_min, Int, null: false
    field :memory_max, Int, null: false
    field :disk_min, Int, null: false
    field :disk_max, Int, null: false
  end
end
