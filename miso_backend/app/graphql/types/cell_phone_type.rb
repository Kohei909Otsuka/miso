module Types
  class CellPhoneType < Types::BaseObject
    field :id, ID, null:false
    field :name, String, null:false
    field :slug, String, null:false
    field :score, Int, null: false
    field :weight, Float, null: true
    field :thickness, Float, null: true
    field :width, Float, null: true
    field :height, Float, null: true
    field :screen_size, Float, null: true
    field :screen_kind, String, null: true
    field :refresh_rate, Int, null: true
    field :cpu, String, null: true
    field :memory, Int, null: true
    field :disk, Int, null: true
    field :is_multi_sim, Boolean, null: true
    field :image_url, String, null: true
  end
end
