class Collection < ApplicationRecord
  validates :title, {presence: true, length: {maximum: 30}}
  validates :description, {length: {maximum: 120}}

  has_many :recommends, dependent: :destroy

  acts_as_taggable
  ActsAsTaggableOn.delimiter = [' ','　', '#', ',', '、']

end
