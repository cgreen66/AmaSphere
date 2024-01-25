class Api::ProductsController < ApplicationController
  include Rails.application.routes.url_helpers

  def index
    @products = Product.includes(photos_attachments: :blob).all
    render json: @products.map { |product| product_with_photo_urls(product) }
  end

  def show
    @product = Product.find(params[:id])
    render json: product_with_photo_urls(@product)
  end

  private

  def product_with_photo_urls(product)
    product.as_json.merge({
      photo_urls: product.photos.map { |photo|
      rails_blob_url(photo, only_path: false)
      }
    })
  end
end
