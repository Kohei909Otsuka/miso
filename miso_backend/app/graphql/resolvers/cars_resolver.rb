module Resolvers
  class CarsResolver < GraphQL::Schema::Resolver
    type [Types::CarType], null: false

    def resolve()
      Car.all
    end
  end
end
