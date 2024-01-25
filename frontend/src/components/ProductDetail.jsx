import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, updateItemQuantity, removeItemFromCart } from '../store/cartSlice';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState('https://amasphere-seeds1.s3.amazonaws.com/MY-21-Superleggera-V4-01-Model-Blocks-630x390-v03.png');
  const [hoveredImage, setHoveredImage] = useState('https://amasphere-seeds1.s3.amazonaws.com/MY-21-Superleggera-V4-01-Model-Blocks-630x390-v03.png');

  const cart = useSelector((state) => state.cart || []); 
  const dispatch = useDispatch();

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

  const totalCost = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 3);
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayName = dayNames[currentDate.getDay()];
  const monthName = monthNames[currentDate.getMonth()];
  const dayOfMonth = currentDate.getDate();
  const formattedDate = `${dayName}, ${monthName} ${dayOfMonth}`;

  const handleThumbnailHover = (image) => {
    setHoveredImage(image);
  };

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
    setHoveredImage(image);
  };

  const handleAddToCart = () => {
    const newItem = { id: product.id, name: product.name, quantity: 1, price: parseFloat(product.price), photo_urls: product.photo_urls };
    dispatch(addItemToCart(newItem));
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    dispatch(updateItemQuantity({ itemId, quantity: newQuantity }));
  };

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeItemFromCart(itemId));
  };

  const formattedPrice = product ? parseFloat(product.price).toFixed(2) : '';

  return (
    <div className="product-detail-container">
      <div className="thumbnail-carousel">
        <img 
          src='https://amasphere-seeds1.s3.amazonaws.com/MY-21-Superleggera-V4-01-Model-Blocks-630x390-v03.png' 
          alt="Thumbnail 1" 
          onMouseEnter={() => handleThumbnailHover('https://amasphere-seeds1.s3.amazonaws.com/MY-21-Superleggera-V4-01-Model-Blocks-630x390-v03.png')} 
          onClick={() => handleThumbnailClick('https://amasphere-seeds1.s3.amazonaws.com/MY-21-Superleggera-V4-01-Model-Blocks-630x390-v03.png')} 
          className="thumbnail-image" 
        />
            <img 
          src='https://amasphere-seeds1.s3.amazonaws.com/2023-BMW-M1000RR-18-scaled.webp' 
          alt="Thumbnail 2" 
          onMouseEnter={() => handleThumbnailHover('https://amasphere-seeds1.s3.amazonaws.com/2023-BMW-M1000RR-18-scaled.webp')} 
          onClick={() => handleThumbnailClick('https://amasphere-seeds1.s3.amazonaws.com/2023-BMW-M1000RR-18-scaled.webp')} 
          className="thumbnail-image" 
        />
              <img 
          src='https://amasphere-seeds1.s3.amazonaws.com/Z6SHRDJOCZHA3JVBJS2TGBYIIY.avif' 
          alt="Thumbnail 3" 
          onMouseEnter={() => handleThumbnailHover('https://amasphere-seeds1.s3.amazonaws.com/Z6SHRDJOCZHA3JVBJS2TGBYIIY.avif')} 
          onClick={() => handleThumbnailClick('https://amasphere-seeds1.s3.amazonaws.com/Z6SHRDJOCZHA3JVBJS2TGBYIIY.avif')} 
          className="thumbnail-image" 
        />
      </div>
      <div className="product-detail-main">
        <img src={hoveredImage} alt={product ? product.name : 'Product'} className="product-main-image" />
      </div>
      <div className="product-detail-info">
        <h1 className="product-title">{product ? product.name : ''}</h1>
        <div className="product-rating">★★★★★</div>
        <p className="product-description">{product ? product.description : ''}</p>
  
        <div className="purchase-box">
          <div className="prime-logo-container">
            <img src='https://amasphere-seeds1.s3.amazonaws.com/Amazon_Prime_Logo.svg' alt="Prime Logo" className="prime-logo" />
          </div>
          <p className="delivery-date">FREE delivery by {formattedDate}</p>
          <p className="product-price">${formattedPrice} <span className="price-per-unit">($0.42 / Ounce)</span></p>
          <div className="product-availability">In Stock</div>
          <div className="product-actions">
            <label htmlFor="quantity" className="quantity-label">Quantity:</label>
            <select id="quantity" name="quantity" className="quantity-selector">
              {[...Array(10).keys()].map(number => <option key={number} value={number + 1}>{number + 1}</option>)}
            </select>
          </div>
          <button onClick={handleAddToCart} className="add-to-cart-button">Add to Cart</button>
          <button className="buy-now-button">Buy Now</button>
        </div>
      </div>
    </div>
  );
  
};

export default ProductDetail;
