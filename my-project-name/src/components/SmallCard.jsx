import React from "react";

const SmallCard = ({ product, onClick }) => (
  <div className={`card`} onClick={onClick}>
    <img src={product.img} alt={product.name} className="card-image" />
    <div className="card-content">
      <h3 className="card-title">{product.name}</h3>
    </div>
  </div>
);

export default SmallCard;
