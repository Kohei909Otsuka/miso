module Resolvers
  class CarResolver < GraphQL::Schema::Resolver
    type Types::CarType, null: false

    argument :id, ID, required: true

    def resolve(id:)
      Car.find_by(id: id)
    end
  end
end
