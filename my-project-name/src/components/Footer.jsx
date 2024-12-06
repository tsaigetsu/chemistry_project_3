import React from 'react';
import avatar from '../assets/images/avatar.jpg'; // Путь к вашему фото
import { translations } from '../assets/data/translations';

const Footer = ({ language }) => {
  const t = translations[language];

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Фото */}
        <div className="avatar-container">
          <img src={avatar} alt="Avatar" className="avatar" />
        </div>

        <div className="footer-text-container">
        {/* Имя и фамилия */}
        <div className="name-container">
          <p className="name">{t.avatarName}</p> {/* Имя и фамилия */}
        </div>

        {/* Гиперссылки */}
        <div className="social-links">
          <a href="https://www.linkedin.com/in/vladislav-stremetskyi/?locale=en_US" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/tsaigetsu" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://github.com/tsaigetsu/chemistry_project_3" target="_blank" rel="noopener noreferrer">GitHub Project</a>
          <a href="https://www.instagram.com/lcc_wladislav/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
