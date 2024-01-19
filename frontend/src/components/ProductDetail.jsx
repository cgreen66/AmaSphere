import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';
import ducati from '/Users/christopher/AmaSphere/public/images/PANIGALEV4RRSIDE_2000x.webp';
import m1000 from '/Users/christopher/AmaSphere/public/images/2023-BMW-M1000RR-18-scaled.webp';
import prime from '/Users/christopher/AmaSphere/public/images/Amazon_Prime_Logo.svg';
import h2r from '/Users/christopher/AmaSphere/public/images/Z6SHRDJOCZHA3JVBJS2TGBYIIY.avif';
import r1m from '/Users/christopher/AmaSphere/public/images/3f8469b3-5cd7-4e22-9002-aa052bed074c.png';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(ducati);
  const [hoveredImage, setHoveredImage] = useState(ducati);

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

  const formattedPrice = product ? parseFloat(product.price).toFixed(2) : null;

  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 3);
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayName = dayNames[currentDate.getDay()];
  const monthName = monthNames[currentDate.getMonth()];
  const dayOfMonth = currentDate.getDate();
  const formattedDate = `${dayName}, ${monthName} ${dayOfMonth}`;

  const handleThumbnailHover = (image) => {
    setHoveredImage(image); // Update hovered image
  };

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
    setHoveredImage(image); // Update hovered image on click too
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail-container">
      <div className="thumbnail-carousel">
        <img src={ducati} alt="Thumbnail of Ducati" onMouseEnter={() => handleThumbnailHover(ducati)} onClick={() => handleThumbnailClick(ducati)} className="thumbnail-image" />
        <img src={m1000} alt="Thumbnail of M1000" onMouseEnter={() => handleThumbnailHover(m1000)} onClick={() => handleThumbnailClick(m1000)} className="thumbnail-image" />
        <img src={h2r} alt="Thumbnail of H2R" onMouseEnter={() => handleThumbnailHover(h2r)} onClick={() => handleThumbnailClick(h2r)} className="thumbnail-image" />
        <img src={r1m} alt="Thumbnail of R1M" onMouseEnter={() => handleThumbnailHover(r1m)} onClick={() => handleThumbnailClick(r1m)} className="thumbnail-image" />
      </div>
      <div className="product-detail-main">
        <img src={hoveredImage} alt={product.name} className="product-main-image" />
      </div>
      <div className="product-detail-info">
        <h1 className="product-title">{product.name}</h1>
        <div className="product-rating">★★★★★</div>
        <p className="product-description">{product.description}</p>
   
        <div className="purchase-box">
        <div className="prime-logo-container">
          <img src={prime} alt="Prime Logo" className="prime-logo" />
        </div>
        <p className="delivery-date">FREE delivery by {formattedDate}</p>
        <p className="product-price">{formattedPrice} <span className="price-per-unit">($0.42 / Ounce)</span></p>
        <div className="product-availability">In Stock</div>
        <div className="product-actions">
          <label htmlFor="quantity" className="quantity-label">Quantity:</label>
          <select id="quantity" name="quantity" className="quantity-selector">
            {[...Array(10).keys()].map(number => <option key={number} value={number + 1}>{number + 1}</option>)}
          </select>
          </div>
          <button className="add-to-cart-button">Add to Cart</button>
          <button className="buy-now-button">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
