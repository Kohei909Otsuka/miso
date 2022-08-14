module Resolvers
  class CarResolver < GraphQL::Schema::Resolver
    type Types::CarType, null: false

    argument :slug, String, required: true

    def resolve(slug:)
      Car.find_by(slug: slug)
    end
  end
end
