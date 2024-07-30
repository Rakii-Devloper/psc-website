import React from 'react';
import { useFetchProducts } from '../query/queries'; // Adjust import if needed
import './ProductPage.css'; // Ensure correct path for CSS file

const ProductPage = () => {
  const { data, error, isLoading } = useFetchProducts();

  // Access the products array from the response data
  const products = data?.products;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Check if products is an array and contains items
  if (!Array.isArray(products) || products.length === 0) {
    return <div>No products found</div>;
  }

  return (
    <div className="product-container">
      {products.map(product => (
        <div className="product-card" key={product.id}>
          <img src={product.thumbnail} alt={product.title} className="product-image" />
          <div className="product-details">
            <h2 className="product-name">{product.title}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
