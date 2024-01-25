class Product < ApplicationRecord
    validates :name, presence: true
    validates :price, presence: true

    has_many_attached :photos
end
