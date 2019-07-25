class Recommend < ApplicationRecord
  validates :name, {presence: true, length: {maximum: 30}}
  validates :price, {presence: true}
  validates :description, {length: {maximum: 120}}

  belongs_to :collection
  has_one :shop, dependent: :destroy

  mount_uploader :reco_image, RecoImageUploader

  def fitted_image_url
    splited_url = reco_image_url.split('/')
    i = splited_url.index('uploads')
    splited_url[i..].join('/')
  end
end
