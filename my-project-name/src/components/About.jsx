import React from "react";

const About = ({ language, image }) => {
  return (
    <section className="about-section">
      <div className="section-wrap">
        <div className="about-content">
          <div className="about-image-wrap">
            <img className="about-image" src={image} alt="About image" />
          </div>
          <div className="about-text">
            <h2 className="about-title">
              {language === "en" ? "About" : "O nas"}
            </h2>
            <p className="about-description">
              {language === "en"
                ? "The goal of this project was to provide you with an opportunity to learn about alcohol facts and myths, as well as the history of its discovery and the most popular myth surrounding alcohol. I created this project myself, based on various sources and personal research, to present accurate and interesting data, debunk myths, and give a true perspective on the subject."
                : "Celem tego projektu było umożliwienie wam zapoznania się z faktami i mitami dotyczącymi alkoholu, a także z historią jego odkrycia oraz najpopularniejszym mitem na jego temat. Projekt stworzyłem samodzielnie, opierając się na różnych źródłach i własnych badaniach, aby przedstawić dokładne i interesujące dane, obalić mity i ukazać prawdziwy obraz tego zagadnienia."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
