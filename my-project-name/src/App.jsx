import { useState } from 'react';
import { alcoholsEN } from './assets/data/alcohols-en.js';
import { alcoholsPL } from './assets/data/alcohols-pl.js';
import { pyrotechnicsEN } from './assets/data/pyrotechnics-en.js';
import { pyrotechnicsPL } from './assets/data/pyrotechnics-pl.js';
import { translations } from './assets/data/translations.js';
import logo from './assets/logo.png';

function App() {
  const [theme, setTheme] = useState('alcohol'); // Тема по умолчанию - alcohol
  const [currentIndex, setCurrentIndex] = useState(0); // Индекс текущего продукта
  const [language, setLanguage] = useState('en'); // Язык по умолчанию - английский

  // Получение перевода в зависимости от языка
  const getTranslation = (key) => translations[language][key] || key;

  // Данные для текущей темы и языка
  const currentItems = theme === 'alcohol'
    ? (language === 'pl' ? alcoholsPL : alcoholsEN)
    : (language === 'pl' ? pyrotechnicsPL : pyrotechnicsEN);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme); // Меняем тему
  };

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage); // Меняем язык
    setCurrentIndex(0); // Сбрасываем индекс текущего продукта при смене языка
  };

  const handleScroll = (direction) => {
    if (direction === 'next') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % currentItems.length);
    } else {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + currentItems.length) % currentItems.length);
    }
  };

  const currentItem = currentItems[currentIndex];

  return (
    <div className="app-container">
      <div className={`app ${theme}`}>
        <header className="header">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
            <span className="title">{getTranslation('title')}</span>
          </div>

          <div className="nav-menu">
            <span onClick={() => handleThemeChange('alcohol')} className={`nav-item ${theme === 'alcohol' ? 'active' : ''}`}>
              {getTranslation('alcohol')}
            </span>
            <span className="separator">|</span>
            <span onClick={() => handleThemeChange('flare')} className={`nav-item ${theme === 'flare' ? 'active' : ''}`}>
              {getTranslation('flare')}
            </span>
          </div>

          <div className="language-menu">
            <span onClick={() => handleLanguageChange('pl')} className={`lang-item ${language === 'pl' ? 'active' : ''}`}>PL</span>
            <span className="separator">|</span>
            <span onClick={() => handleLanguageChange('en')} className={`lang-item ${language === 'en' ? 'active' : ''}`}>EN</span>
          </div>

          <div className="about-menu">
            <span className="about-button">{getTranslation('about')}</span>
          </div>
        </header>

        <section className="product-section">
          <div className="product-container">
            <div className="product-arrow left" onClick={() => handleScroll('prev')}>❮</div>

            <div className="product-item">
              <div className="product-image">
                <img src={currentItem.img} alt={currentItem.name} />
              </div>

              <div className="product-info">
                <h2>{currentItem.name}</h2>
                {theme === 'alcohol' && <p>{getTranslation('alcoholContent')}: {currentItem.alcoholContent}</p>}
                <p>{currentItem.description}</p>
              </div>
            </div>

            <div className="product-arrow right" onClick={() => handleScroll('next')}>❯</div>
          </div>
        </section>

        <section className="details-section">
          <div className="details-container">
            <h2>{currentItem.name}</h2>
            <p>{currentItem.detailedDescription}</p>
          </div>
        </section>
        </div>
      </div>
  );
}

export default App;
