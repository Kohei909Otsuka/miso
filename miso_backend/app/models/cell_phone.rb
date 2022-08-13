class CellPhone < ActiveRecord::Base
  has_many :images, :as => :owner

  enum screen_kind: {
    el: 1,
    ips: 2
  }
end
