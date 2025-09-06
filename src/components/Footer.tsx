import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const formEndpoint = "https://formspree.io/f/mjkogqjb";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast("Message sent successfully!", {
          position: "top-center",
          hideProgressBar: true,
          autoClose: 3000,
          style: {
            background: "#59bcc1",
            color: "white",
            fontWeight: 500,
          },
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      toast("Failed to send message.", {
        position: "top-center",
        hideProgressBar: true,
        autoClose: 3000,
        style: {
          background: "#59bcc1",
          color: "white",
          fontWeight: 500,
        },
      });
    }
  };

  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-inner">
          {/* Contact Info */}
          <div className="footer-info">
            <div className="footer-info__left">
              <img src="/images/footer-img.jpg" alt="Ijeoma Enyimiri" />
              <p>Read more about me</p>
            </div>
            <div className="footer-info__right">
              <h5>Get In Touch</h5>
              <p className="footer-phone">Phone: +234 809 497 0949</p>
              <p>Email: ijeoma.enyimiri@gmail.com</p>
              <p>Address: Lagos, Nigeria.</p>
              <div className="social-icons">
                <a
                  href="https://github.com/ijeoma-e"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/github-mark.svg" alt="GitHub" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ijeoma-enyimiri-1a4748125/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/linkedin-mark.svg" alt="LinkedIn" />
                </a>
                <a
                  href="https://x.com/StellaNwad95352"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/x.svg" alt="X (Twitter)" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="footer-contact-form">
            <h5>Contact Form</h5>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form__input">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <input type="submit" value="Submit" className="submit-button" />
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="site-container footer-bottom-inner">
          <p>© {new Date().getFullYear()} Ijeoma Enyimiri | All Rights Reserved.</p>
        </div>
      </div>

      <ToastContainer />
    </footer>
  );
};

export default Footer;
