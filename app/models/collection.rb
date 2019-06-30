class Collection < ApplicationRecord
  validates :title, {presence: true, length: {maximum: 30}}

  has_many :recommends, dependent: :destroy
  validates_associated :recommends
end
