module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.
    field :car, resolver: Resolvers::CarResolver
    field :cars, resolver: Resolvers::CarsResolver
    field :car_stat, resolver: Resolvers::CarStatResolver

    field :cell_phone, resolver: Resolvers::CellPhoneResolver
    field :cell_phones, resolver: Resolvers::CellPhonesResolver
  end
end
