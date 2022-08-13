class Car < ActiveRecord::Base
  has_many :images, :as => :owner
end
