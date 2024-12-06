import React from 'react';

const About = ({ language, image }) => {
  return (
    <section className="about-section">
      <div className="section-wrap">
        <div className="about-content">
          <div className="about-image-wrap">
            <img className="about-image" src={image} alt="About image" />
          </div>
          <div className="about-text">
            <h2 className="about-title">{language === "en" ? "About" : "O nas"}</h2>
            <p className="about-description">
              {language === "en" ? (
                "Our project will help understand both the benefits and risks of alcohol and learn about the history and applications of explosives. Participants will discover their impact on health, safety, and their use in industry, expanding their knowledge about these substances."
              ) : (
                "Nasz projekt pomoże zrozumieć zarówno korzyści, jak i zagrożenia związane z alkoholem oraz poznać historię i zastosowania materiałów wybuchowych. Uczestnicy dowiedzą się o ich wpływie na zdrowie, bezpieczeństwo oraz ich wykorzystaniu w przemyśle, co poszerzy ich wiedzę na temat tych substancji."
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
