import React from "react";

const BigCard = ({ product, onBack, theme }) => {
  const facts = Array.isArray(product.facts)
    ? product.facts
    : product.facts.split(".");
  const myths = Array.isArray(product.myths)
    ? product.myths
    : product.myths.split(".");

  return (
    <div className="big-card">
      <h2 className="details-section-title">Details</h2>
      <div className="big-card-content">
        <img src={product.img} alt={product.name} className="big-card-image" />
        <div className="big-card-text">
          <h2 className="big-card-title">{product.name}</h2>
          <div className="big-card-details">
            <h3>Facts</h3>
            <ul>
              {facts.map((fact, index) => (
                <li key={index}>{fact.trim()}</li>
              ))}
            </ul>
            <h3>Myths</h3>
            <ul>
              {myths.map((myth, index) => (
                <li key={index}>{myth.trim()}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Передаем тему в кнопку с сохранением класса back-button */}
      <button onClick={onBack} className={`back-button ${theme}`}>
        Back
      </button>
    </div>
  );
};

export default BigCard;
