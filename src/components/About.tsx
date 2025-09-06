import React from "react";

const About: React.FC = () => {
  return (
    <section id="About" className="fh5co-about-me">
      <div className="about-me-inner site-container">
        <article className="portfolio-wrapper">
          <div className="portfolio__img">
            <img
              src="/images/IjayHeadshot-mobile.jpeg"
              className="about-me__profile"
              alt="Ijeoma Enyimiri profile"
            />
          </div>
          <div className="portfolio__bottom">
            <div className="portfolio__name">
              <span>I</span>
              <h2 className="universal-h2">jeoma Enyimiri</h2>
            </div>
            <p>
              Software Tester with a passion for automation, quality
              engineering, and CI/CD excellence.
            </p>
          </div>
        </article>

        <div className="about-me__text">
          <div className="about-me-single-slide">
            <h2 className="universal-h2 universal-h2-bckg">Objective</h2>
            <p>
            Detail-oriented and collaborative QA Engineer and Product Manager with hands-on experience in manual and automated testing, API validation, cross-functional teamwork, and stakeholder communication. Proven track record of ensuring product quality across Android and Web platforms, driving process improvements, and supporting successful releases. Actively seeking opportunities to contribute to innovative software teams by combining technical QA skills with strong organizational and people management capabilities to deliver seamless, high-quality user experiences.
            </p>
          </div>
        </div>
      </div>
      <div className="about-me-bckg"></div>
    </section>
  );
};

export default About;
