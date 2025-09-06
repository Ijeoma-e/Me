import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="Contact" className="fh5co-social">
      <div className="site-container">
        <div className="social" style={{ textAlign: "center" }}>
          <h5>Connect with Me</h5>
          <div
            className="social-icons"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1.5rem",
              flexWrap: "wrap",
            }}
          >
            <a
              href="mailto:ijeoma.enyimiri@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <img
                src="/images/gmail.svg"
                alt="email icon"
                style={{ height: "30px" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/ijeoma-enyimiri-1a4748125/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img
                src="/images/linkedin-mark.svg"
                alt="linkedin icon"
                style={{ height: "30px" }}
              />
            </a>
            <a
              href="https://github.com/Ijeoma-e"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <img
                src="/images/github-mark.svg"
                alt="github icon"
                style={{ height: "30px" }}
              />
            </a>
            <a
              href="https://x.com/StellaNwad95352"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="x (Twitter)"
            >
              <img
                src="/images/x.svg"
                alt="twitter icon"
                style={{ height: "30px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
