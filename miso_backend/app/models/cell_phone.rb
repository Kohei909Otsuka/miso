class CellPhone < ActiveRecord::Base
  has_many :images, :as => :owner

  def image_url
    images.order(sequence: :asc).first&.url
  end
end
