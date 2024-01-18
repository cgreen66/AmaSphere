import React from 'react';
import './Product.css'; 
import ducati from '/Users/christopher/AmaSphere/public/images/PANIGALEV4RRSIDE_2000x.webp';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const formattedPrice = parseFloat(product.price).toFixed(2);

    return (
        <Link to={`/products/${product.id}`} className="product-link">
            <div className="product">
                <div className="product-image">
                    <img src={ducati} alt={product.name} />
                </div>
                <div className="product-details">
                    <h2 className="product-title">{product.name}</h2>
                    <div className="product-detail-reviews">
                        <span className="product-detail-rating">⭐⭐⭐⭐⭐</span> {/* Replace with dynamic stars later */}
                        <span className="product-review-count">100 reviews</span> {/* Replace with actual review count */}
                    </div>
                    <p className="product-brand">{product.brand}</p>
                    <div className="product-price">${formattedPrice}</div>
                    <div className="product-rating">{/* Rating component here */}</div>
                    <div className="product-meta">
                        {/* Other meta details like shipping information */}
                    </div>
                    <button className="add-to-cart-button">Add to Cart</button>
                </div>
            </div>
        </Link>
    );
};
  
export default Product;

  