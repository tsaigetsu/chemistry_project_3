import React from "react";
import alcoBg from "../assets/images/alco-bg.png"; // Импортируем картинку для алкоголя
import pyroBg from "../assets/images/pyro-bg.png"; // Импортируем картинку для пиротехники

const History = ({ historyData, isVisible, onToggle, t, theme }) => {
  // Выбираем фоновую картинку в зависимости от темы
  const backgroundImage =
    theme === "alcohol" ? `url(${alcoBg})` : `url(${pyroBg})`;

  // Определяем фон секции в зависимости от состояния isVisible
  const sectionStyle = {
    backgroundImage: isVisible ? backgroundImage : "none", // Если открыто, показываем картинку, иначе нет
    backgroundColor: isVisible ? "transparent" : "var(--light-gray)", // Если закрыто, фоновый цвет light-gray
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section
      className={`history-section ${isVisible ? "expanded" : ""}`}
      style={sectionStyle} // Применяем стиль
    >
      {/* Скрываем фильтр, если секция не открыта */}
      {isVisible && <div className="filter-overlay-history"></div>}

      <div className="section-wrap">
        <button
          className={`toggle-button ${isVisible ? "active" : "inactive"}`}
          onClick={onToggle}
        >
          {isVisible ? `▲ ${t.history} ▲` : `▼ ${t.history} ▼`}
        </button>

        {isVisible && (
          <div className="history-content">
            <h2 className={`history-title ${theme}`}>{t.history}</h2>
            {/* Заголовок секции зависит от темы и языка */}
            <div className="history-details">
              {historyData.map((item, index) => (
                <p className="history-p" key={index}>
                  {item.history}
                </p> // Отображаем историю как текст
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default History;
