import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';
import ducati from '/Users/christopher/AmaSphere/public/images/PANIGALEV4RRSIDE_2000x.webp';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {

    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/products/${productId}`);
        if (!response.ok) {
          throw new Error('Product not found');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Failed to load product", error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const formattedPrice = parseFloat(product.price).toFixed(2);

  return (
    <div className="product-detail">
      <div className="product-detail-image">
        <img src={ducati} alt={product.name} />
      </div>
      <div className="product-detail-info">
        <h1 className="product-detail-title">{product.name}</h1>
        <p className="product-detail-description">{product.description}</p>
        <div className="product-detail-meta">
          <span className="product-detail-price">${formattedPrice}</span>
          <div className="product-detail-reviews">
            <span className="product-detail-rating">⭐⭐⭐⭐⭐</span> {/* Replace with dynamic stars later */}
            <span className="product-review-count">100 reviews</span> {/* Replace with actual review count */}
          </div>
          <span className="product-detail-category">{product.category}</span>
          <span className="product-detail-brand">{product.brand}</span>
          <span className="product-detail-dimensions">{product.dimensions}</span>
          <span className="product-detail-weight">{product.weight}</span>
          {/* Add more details as needed */}
        </div>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetail;
