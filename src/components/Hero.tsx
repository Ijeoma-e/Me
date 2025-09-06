import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Hero: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/files/Ijeoma_Stella_Enyimiri _CV.pdf";
    link.download = "Ijeoma_Stella_Enyimiri _CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast("CV download started!", {
      position: "top-center",
      hideProgressBar: true,
      autoClose: 2500,
      closeOnClick: true,
      style: {
        background: "#59bcc1",
        color: "white",
        fontWeight: 500,
      },
    });
  };

  return (
    <section id="Hero" className="fh5co-top-banner">
      <div className="top-banner__inner site-container">
        {/* ✅ Hero image: visible only on desktop, hidden on mobile */}
        <div className="top-banner__image hero-desktop-only">
          <img src="/images/hero.png" alt="Ijeoma Enyimiri" />
        </div>

        <div className="top-banner__text">
          <div className="top-banner__text-up">
            <span className="brand-span">Hi, I'm</span>
            <h2 className="top-banner__h2">Ijeoma</h2>
          </div>
          <div className="top-banner__text-down">
            <h2 className="top-banner__h2">Enyimiri</h2>
            <span className="brand-span">
              QA Engineer | HR-Turned-Techie | SDET Enthusiast
            </span>
          </div>
          <p>
            I'm a Quality Assurance Professional with a background in Human
            Resources and a strong interest in technology. I specialize in both
            manual and automated testing, using tools like Jira, Postman,
            Cypress, etc to ensure smooth and reliable user experiences.
            <br />
            <br />
            My approach combines attention to detail, structured thinking, and
            continuous learning. Outside of work, I enjoy fashion designing /
            styling as a creative hobby.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              marginTop: "1rem",
            }}
          >
            <a
              href="https://www.linkedin.com/in/ijeoma-enyimiri-1a4748125/"
              className="brand-button"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect on LinkedIn"
            >
              Connect on LinkedIn
            </a>
            <button
              onClick={handleDownload}
              className="brand-button"
              style={{ cursor: "pointer" }}
              aria-label="Download CV"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        hideProgressBar
        closeOnClick
        autoClose={2500}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </section>
  );
};

export default Hero;
