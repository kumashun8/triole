class Shop < ApplicationRecord
  validates :name, {presence: true}
  validates :googlemap_link, {presence: true}

  belongs_to :recommend
end
