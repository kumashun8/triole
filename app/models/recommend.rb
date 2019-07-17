class Recommend < ApplicationRecord
  validates :name, {presence: true, length: {maximum: 30}}
  validates :price, {presence: true}
  validates :description, {length: {maximum: 120}}

  belongs_to :collection
  has_one :shop

  mount_uploader :reco_image, RecoImageUploader
end
