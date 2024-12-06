import React from "react";
import SmallCard from "./SmallCard";

const DetailsSection = ({ productList, onSelect, toggleTheme, t, language }) => {
  return (
    <section className="details-section">
      <h2 className="details-section-title">
        {language === "en" ? "Details" : "Szczegóły"}
      </h2>
      <div className="cards-container">
        {productList.map((product, index) => (
          <SmallCard
            key={index}
            product={product}
            onClick={() => onSelect(index)}
          />
        ))}
      </div>

      {/* Кнопки смены темы */}
      <div className="theme-buttons">
        <button
          className="theme-btn alcohol"
          onClick={() => toggleTheme("alcohol")}
        >
          {t.alcohol}
        </button>
        <button
          className="theme-btn flare"
          onClick={() => toggleTheme("flare")}
        >
          {t.flare}
        </button>
      </div>
    </section>
  );
};

export default DetailsSection;
