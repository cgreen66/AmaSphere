import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product';
import "./brandproducts.css"

const BrandProducts = () => {
  const [products, setProducts] = useState([]);
  const { brandName } = useParams(); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`/api/products/brand/${brandName}`);
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          console.error('Failed to fetch products');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [brandName]);

  if (products.length === 0) {
    return <div>No products found for {brandName}.</div>;
  }

  return (
    <div className="products-container">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default BrandProducts;
