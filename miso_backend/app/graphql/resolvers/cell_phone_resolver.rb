module Resolvers
  class CellPhoneResolver < GraphQL::Schema::Resolver
    type Types::CellPhoneType, null: false

    argument :id, ID, required: true

    def resolve(id:)
      CellPhone.find_by(id: id)
    end
  end
end
