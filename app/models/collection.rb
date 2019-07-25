class Collection < ApplicationRecord
  validates :title, {presence: true, length: {maximum: 30}}
  validates :description, {length: {maximum: 120}}

  has_many :recommends, dependent: :destroy
end
