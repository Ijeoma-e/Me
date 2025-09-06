import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    document.body.classList.toggle("stop-scroll");
  };

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
        document.body.classList.remove("stop-scroll");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="site-navigation">
      <div className="site-navigation-inner site-container">
        {/* Desktop: show text logo */}
        <a
          href="#Hero"
          className="site-logo-text desktop-only"
          style={{
            fontWeight: "bold",
            fontSize: "1.25rem",
            color: "#59bcc1",
            textDecoration: "none",
          }}
        >
          Ijeoma Enyimiri
        </a>

        {/* Mobile: show hero image instead of name */}
        <a href="#Hero" className="mobile-only">
          <img
            src="/images/IjayHeadshot-mobile.jpeg"
            alt="Ijeoma Enyimiri"
            className="navbar-hero-mobile"
          />
        </a>

        <div
          className={`main-navigation ${menuOpen ? "open" : ""}`}
          style={{ display: menuOpen ? "block" : "none" }}
        >
          <ul className="main-navigation__ul">
            <li>
              <a href="#Hero" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#Skills" onClick={toggleMenu}>
                Skills
              </a>
            </li>
            <li>
              <a href="#Quotes" onClick={toggleMenu}>
                Quotes
              </a>
            </li>
            <li>
              <a href="#Experience" onClick={toggleMenu}>
                Experience
              </a>
            </li>
            
            <li>
              <a href="#Contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div
          id="myBtn"
          className={`burger-container ${menuOpen ? "change" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
