class Collection < ApplicationRecord
  validates :title, {presence: true, length: {maximum: 30}}

  has_many :recommends

  mount_uploader :reco_image, RecoImageUploader
end
