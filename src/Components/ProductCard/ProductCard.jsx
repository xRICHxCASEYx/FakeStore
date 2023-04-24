import React from 'react';
import './ProductCard.css';

function PeoductCard(props) {
  const { title, price, category, image } = props.product;

  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-category">{category}</p>
        <p className="card-price">${price}</p>
      </div>
    </div>
  );
}

export default ProductCard;

