import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../store/cartSlice'; 
import './Product.css';
import ducati from '/Users/christopher/AmaSphere/public/images/PANIGALEV4RRSIDE_2000x.webp';

const Product = ({ product }) => {
    const dispatch = useDispatch();
    const formattedPrice = parseFloat(product.price).toFixed(2);
  
    const handleAddToCart = () => {
      dispatch(addItemToCart({ id: product.id, name: product.name, quantity: 1, price: product.price }));
    };
  
    const imageUrl = product.photo_urls?.[0] || ducati;


    return (
      <Link to={`/products/${product.id}`} className="product-link">
        <div className="product">
          <div className="product-image">
            <img src={imageUrl} alt={product.name} />
          </div>
          <div className="product-details">
            <h2 className="product-title">{product.name}</h2>
            <div className="product-detail-reviews">
              <span className="product-detail-rating">⭐⭐⭐⭐⭐</span> 
              <span className="product-review-count">100 reviews</span>
            </div>
            <p className="product-brand">{product.brand}</p>
            <div className="product-price">${formattedPrice}</div>
            <div className="product-rating"></div>
          </div>
        </div>
      </Link>
    );
  };
  
  export default Product;
  