class Recommend < ApplicationRecord
  validates :name, {presence: true, length: {maximum: 30}}
  validates :price, {presence: true}
  validates :description, {length: {maximum: 120}}

  belongs_to :collection
  has_one :shop, dependent: :destroy

  mount_uploader :reco_image, RecoImageUploader

  def fitted_image_url
    if reco_image_url(:thumb).present?
      splited_url = reco_image_url(:thumb).split('/')
      i = splited_url.index('uploads')
      splited_url[i..].join('/')
    end
  end
end
