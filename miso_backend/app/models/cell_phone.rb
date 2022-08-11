class CellPhone < ActiveRecord::Base
  has_many :images, :as => :owner
end
