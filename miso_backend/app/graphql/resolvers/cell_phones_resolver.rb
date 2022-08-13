module Resolvers
  class CellPhonesResolver < GraphQL::Schema::Resolver
    type [Types::CellPhoneType], null: false
    argument :weight_min, Float, required: false
    argument :weight_max, Float, required: false
    argument :thickness_min, Float, required: false
    argument :thickness_max, Float, required: false
    argument :width_min, Float, required: false
    argument :width_max, Float, required: false
    argument :height_min, Float, required: false
    argument :height_max, Float, required: false
    argument :screen_size_min, Float, required: false
    argument :screen_size_max, Float, required: false
    argument :refresh_rate_min, Int, required: false
    argument :refresh_rate_max, Int, required: false
    argument :memory_min, Int, required: false
    argument :memory_max, Int, required: false
    argument :disk_min, Int, required: false
    argument :disk_max, Int, required: false
    argument :screen_kinds, [String], required: false
    argument :is_multi_sim, Boolean, required: false

    def resolve(**args)
      f = CellPhoneFilter.new({
        weight_min: args[:weight_min],
        weight_max: args[:weight_max],
        thickness_min: args[:thickness_min],
        thickness_max: args[:thickness_max],
        width_min: args[:width_min],
        width_max: args[:width_max],
        height_min: args[:height_min],
        height_max: args[:height_max],
        screen_size_min: args[:screen_size_min],
        screen_size_max: args[:screen_size_max],
        refresh_rate_min: args[:refresh_rate_min],
        refresh_rate_max: args[:refresh_rate_max],
        memory_min: args[:memory_min],
        memory_max: args[:memory_max],
        disk_min: args[:disk_min],
        disk_max: args[:disk_max],
        screen_kinds: args[:screen_kinds],
        is_multi_sim: args[:is_multi_sim],
      })
    end
  end
end
