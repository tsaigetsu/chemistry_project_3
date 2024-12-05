import React, { useState } from 'react';
import { alcoholsEn } from './assets/data/alcohols-en.js'; // Данные для алкоголя на английском
import { alcoholsPl } from './assets/data/alcohols-pl.js'; // Данные для алкоголя на польском
import { pyrotechnicsEn } from './assets/data/pyrotechnics-en.js'; // Данные для пиротехники на английском
import { pyrotechnicsPl } from './assets/data/pyrotechnics-pl.js'; // Данные для пиротехники на польском
import { translations } from './assets/data/translations.js'; // Переводы для текста

function App() {
  const [theme, setTheme] = useState('alcohol'); // Тема по умолчанию - alcohol
  const [currentIndex, setCurrentIndex] = useState(0); // Индекс текущего продукта
  const [language, setLanguage] = useState('en'); // Язык по умолчанию - английский

  // Проверка наличия данных для выбранной темы и языка
  const currentItems = React.useMemo(() => {
    if (theme === 'alcohol') {
      return language === 'pl' ? alcoholsPl : alcoholsEn;
    }
    return language === 'pl' ? pyrotechnicsPl : pyrotechnicsEn;
  }, [theme, language]);

  const getTranslation = (key) => {
    return translations[language]?.[key] || key;
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    setCurrentIndex(0); // Сброс индекса при смене темы
  };

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    setCurrentIndex(0); // Сброс индекса при смене языка
  };

  const handleScroll = (direction) => {
    if (!currentItems || currentItems.length === 0) return;
    setCurrentIndex((prevIndex) =>
      direction === 'next'
        ? (prevIndex + 1) % currentItems.length
        : (prevIndex - 1 + currentItems.length) % currentItems.length
    );
  };

  if (!currentItems || currentItems.length === 0) {
    return (
      <div className="app">
        <p>{getTranslation('noData')}</p>
      </div>
    );
  }

  const currentItem = currentItems[currentIndex];

  return (
    <div className={`app ${theme}`}>
      <header className="header">
        <div className="logo-container">
          <img src="/assets/logo.png" alt="Logo" className="logo" />
          <span className="title">{getTranslation('title')}</span>
        </div>

        <div className="nav-menu">
          <span
            onClick={() => handleThemeChange('alcohol')}
            className={`nav-item ${theme === 'alcohol' ? 'active' : ''}`}
          >
            {getTranslation('alcohol')}
          </span>
          <span className="separator">|</span>
          <span
            onClick={() => handleThemeChange('flare')}
            className={`nav-item ${theme === 'flare' ? 'active' : ''}`}
          >
            {getTranslation('flare')}
          </span>
        </div>

        <div className="language-menu">
          <span
            onClick={() => handleLanguageChange('pl')}
            className={`lang-item ${language === 'pl' ? 'active' : ''}`}
          >
            PL
          </span>
          <span className="separator">|</span>
          <span
            onClick={() => handleLanguageChange('en')}
            className={`lang-item ${language === 'en' ? 'active' : ''}`}
          >
            EN
          </span>
        </div>

        <div className="about-menu">
          <span className="about-button">{getTranslation('about')}</span>
        </div>
      </header>

      <section className="product-section">
        <div className="product-container">
          <div className="product-arrow left" onClick={() => handleScroll('prev')}>
            ❮
          </div>

          <div className="product-item">
            <div className="product-image">
              <img src={currentItem.img} alt={currentItem.name} />
            </div>

            <div className="product-info">
              <h2>{currentItem.name}</h2>
              {theme === 'alcohol' && <p>Alcohol content: {currentItem.alcoholContent}</p>}
              <p>{currentItem.description}</p>
            </div>
          </div>

          <div className="product-arrow right" onClick={() => handleScroll('next')}>
            ❯
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
