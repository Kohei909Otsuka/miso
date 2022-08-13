module Resolvers
  class CellPhoneStatResolver < GraphQL::Schema::Resolver
    type Types::CellPhoneStatType, null: false

    def resolve
      query= <<-SQL
      SELECT
        MIN(width) as weight_min,
        MAX(width) as weight_max,
        MIN(thickness) as thickness_min,
        MAX(thickness) as thickness_max,
        MIN(width) as width_min,
        MAX(width) as width_max,
        MIN(height) as height_min,
        MAX(height) as height_max,
        MIN(screen_size) as screen_size_min,
        MAX(screen_size) as screen_size_max,
        MIN(refresh_rate) as refresh_rate_min,
        MAX(refresh_rate) as refresh_rate_max,
        MIN(memory) as memory_min,
        MAX(memory) as memory_max,
        MIN(disk) as disk_min,
        MAX(disk) as disk_max,
      FROM cell_phones
      ;
      SQL


      res = ActiveRecord::Base.connection.select_all(query).to_a.first
      OpenStruct.new(res)
    end
  end
end
