module Resolvers
  class CellPhonesResolver < GraphQL::Schema::Resolver
    type [Types::CellPhoneType], null: false

    def resolve()
      CellPhone.all
    end
  end
end
