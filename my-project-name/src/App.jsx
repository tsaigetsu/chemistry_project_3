import React, { useState } from "react";
import logo from "./assets/logo.png";
import "./index.css";
import { alcoholsEN } from "./assets/data/alcohols-en.js";
import { alcoholsPL } from "./assets/data/alcohols-pl.js";
import { pyrotechnicsEN } from "./assets/data/pyrotechnics-en.js";
import { pyrotechnicsPL } from "./assets/data/pyrotechnics-pl.js";
import { alcoholsHistoryEN } from "./assets/data/alcohol-history-en.js";
import { alcoholsHistoryPL } from "./assets/data/alcohol-history-pl.js";
import { pyrotechnicsHistoryEN } from "./assets/data/pyrotechnics-history-en.js";
import { pyrotechnicsHistoryPL } from "./assets/data/pyrotechnics-history-pl.js";
import { translations } from "./assets/data/translations.js";
import DetailsSection from './components/DetailsSection';
import BigCard from './components/BigCard.jsx';
import History from './components/History.jsx';
import About from './components/About.jsx';
import Footer from './components/Footer.jsx'; // Импортируем Footer

// Объединяем данные для алкоголя и пиротехники в отдельные массивы для каждой темы
const allAlcoholsEN = alcoholsEN;
const allAlcoholsPL = alcoholsPL;
const allPyrotechnicsEN = pyrotechnicsEN;
const allPyrotechnicsPL = pyrotechnicsPL;

const App = () => {
  const [language, setLanguage] = useState("en");
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [currentTheme, setCurrentTheme] = useState("alcohol");
  const [selectedProductIndex, setSelectedProductIndex] = useState(null); // Для выбранного продукта
  const [historyVisible, setHistoryVisible] = useState(false);

  // Функция для переключения языка
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "pl" : "en");
  };

  // Функция для переключения темы
  const toggleTheme = (theme) => {
    setCurrentTheme(theme);
    setCurrentProductIndex(0); // сброс индекса при смене темы
  };

  // Логика для смены продукта
  const nextProduct = () => {
    const totalProducts = currentTheme === "alcohol" ? (language === "en" ? allAlcoholsEN : allAlcoholsPL).length : (language === "en" ? allPyrotechnicsEN : allPyrotechnicsPL).length;
    setCurrentProductIndex((prevIndex) => (prevIndex + 1) % totalProducts);
  };

  const prevProduct = () => {
    const totalProducts = currentTheme === "alcohol" ? (language === "en" ? allAlcoholsEN : allAlcoholsPL).length : (language === "en" ? allPyrotechnicsEN : allPyrotechnicsPL).length;
    setCurrentProductIndex((prevIndex) => (prevIndex - 1 + totalProducts) % totalProducts);
  };

  // Выбор данных в зависимости от текущей темы и языка
  const currentData = currentTheme === "alcohol"
    ? language === "en" ? allAlcoholsEN[currentProductIndex] : allAlcoholsPL[currentProductIndex]
    : language === "en" ? allPyrotechnicsEN[currentProductIndex] : allPyrotechnicsPL[currentProductIndex];

  // Получаем переводы для текущего языка
  const t = translations[language];

  // Данные для карточек в зависимости от темы
  const detailsData = currentTheme === "alcohol" ? (language === "en" ? allAlcoholsEN : allAlcoholsPL) : (language === "en" ? allPyrotechnicsEN : allPyrotechnicsPL);

  // Функция для обработки клика на карточку
  const handleCardClick = (index) => {
    setSelectedProductIndex(index);
  };

   const historyData = currentTheme === "alcohol"
    ? language === "en" ? alcoholsHistoryEN : alcoholsHistoryPL
    : language === "en" ? pyrotechnicsHistoryEN : pyrotechnicsHistoryPL;

  return (
    <div className="App">
      {/* Фоновый текст */}
      <section className="background-text-section">
        <h1 className="background-text">{t.title}</h1>
        <div className="filter-overlay"></div>
      </section>

      {/* Меню слева */}
      <div className="sidebar">
        <img src={logo} alt="Logo" className="logo" />

        {/* Новые кнопки */}
        <div className="additional-buttons">
          <button className="additional-btn" id="alcohol" onClick={() => toggleTheme("alcohol")}>{t.alcohol}</button>
          <hr className="divider" />
          <button className="additional-btn" id="flare" onClick={() => toggleTheme("flare")}>{t.flare}</button>
        </div>

        <div className="language-buttons">
          <button className="language-btn" id="en" onClick={toggleLanguage}>EN</button>
          <hr className="divider" />
          <button className="language-btn" id="pl" onClick={toggleLanguage}>PL</button>
        </div>
      </div>

      {/* Контент с изображением и описанием */}
      <section className="content-section">
        <div className="image-wrap">
          <img
            src={currentData.img} 
            alt={currentData.name}
            className="product-image"
          />
        </div>
        <div className="product-info">
          <h2 className="product-title">{currentData.name}</h2>
          <h3 className="discover-facts">
            {t.discover} <span className={`facts ${currentTheme}`}>{t.discoverFacts}</span>
          </h3>

          {/* Кнопки навигации */}
          <div className="navigation-buttons">
            <button className="nav-btn" onClick={prevProduct}>{t.prev}</button>
            <button className="nav-btn" onClick={nextProduct}>{t.next}</button>
          </div>
        </div>
      </section>

      {/* Новая секция с карточками */}
      {/* Если выбран продукт, отображаем подробную информацию */}
      {selectedProductIndex !== null ? (
          <BigCard
            product={detailsData[selectedProductIndex]}
          onBack={() => setSelectedProductIndex(null)}
          theme={currentTheme}
          />
        ) : (
          <DetailsSection
            productList={detailsData}
            onSelect={setSelectedProductIndex}
            toggleTheme={toggleTheme} // Передача функции смены темы
            t={t} // Передача объекта с текстом
            language={language}
          />

      )}
      {/* Секция History */}
      <History
        historyData={historyData}
        isVisible={historyVisible}
        onToggle={() => setHistoryVisible(prev => !prev)}
        t={t}
        theme={currentTheme}
      />
      {/* Секция About */}
      <About
        language={language}
        image={currentData.img}
      />
      <Footer language={language} />
    </div>
  );
};

export default App;
