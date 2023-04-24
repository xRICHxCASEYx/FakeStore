import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HomePage.css';

function HomePage() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Electronics', 'Jewelry', "Men's Clothing", "Women's Clothing"];

  useEffect(() => {
    const url = selectedCategory === 'All'
      ? 'https://fakestoreapi.com/products'
      : `https://fakestoreapi.com/products/category/${selectedCategory}`;

    axios.get(url)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [selectedCategory]);

  const toggleDescription = (id) => {
    setProducts(prevProducts => {
      const updatedProducts = [...prevProducts];
      const productToUpdate = updatedProducts.find(product => product.id === id);
      productToUpdate.showDescription = !productToUpdate.showDescription;
      return updatedProducts;
    });
  }

  return (
    <div className="home-container">
      <div className="category-container">
        {categories.map(category => (
          <button
            key={category}
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="product-container">
        {products.map(product => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.title} className="card-image" />
            <div className="card-info">
              <h3 className="card-title">{product.title}</h3>
              <p className="card-price">${product.price.toFixed(2)}</p>
              <p className="card-category">{product.category}</p>
              {product.showDescription &&
                <p className="card-description">{product.description}</p>
              }
              <button className="card-toggle" onClick={() => toggleDescription(product.id)}>
                {product.showDescription ? 'Hide Description' : 'Show Description'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;






