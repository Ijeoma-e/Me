import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Components
const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="custom-arrow custom-prev"
      onClick={onClick}
      style={{
        left: "0",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        fontSize: "2rem",
        zIndex: 2,
        color: "#59bcc1",
      }}
    >
      &#10094;
    </div>
  );
};

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="custom-arrow custom-next"
      onClick={onClick}
      style={{
        right: "0",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        fontSize: "2rem",
        zIndex: 2,
        color: "#59bcc1",
      }}
    >
      &#10095;
    </div>
  );
};

const Quotes: React.FC = () => {
  const quotes = [
    {
      text: "Ijeoma has an incredible eye for detail and approaches every QA task with precision. Her work on our web and mobile testing saved us from critical post-release issues.",
      name: "Michael Osomugha",
      title: "CTO, PaySkul",
    },
    {
      text: "A dedicated professional who not only identifies bugs but also provides actionable insights to improve product usability and performance.",
      name: "Blessing Martins Onyelekwe",
      title: "Product Manager, Jarmortech",
    },
    {
      text: "Ijeoma's testing coverage, particularly her API and regression testing skills, are second to none. Her contributions during our product launch were invaluable.",
      name: "Ishaq Ali Dambaba",
      title: "CEO, Dynasty Ocean Shipping",
    },
    {
      text: "Beyond her technical skills, Ijeoma is a fantastic communicator. She bridges gaps between QA, developers, and PMs with clarity and empathy.",
      name: "Ololade Peace",
      title: "Lead Product Manager, Jarmortech",
    },
    {
      text: "Ijeoma is a fast learner and a highly dependable QA Engineer. Her growth in such a short time is proof of her passion and commitment.",
      name: "Abiola Rasaq",
      title: "QA Lead & Mentor, Founder The Bug Detective",
    },
  ];

  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section
      id="Quotes"
      className="fh5co-quotes"
      style={{ position: "relative" }}
    >
      <div className="site-container">
        <Slider {...settings} className="about-me-slider">
          {quotes.map((quote, i) => (
            <div key={i} style={{ padding: "2rem", textAlign: "center" }}>
              <h2 className="universal-h2 universal-h2-bckg">
                What People Are Saying
              </h2>
              <p
                style={{
                  fontStyle: "italic",
                  maxWidth: "700px",
                  margin: "1rem auto",
                }}
              >
                “{quote.text}”
              </p>
              <img
                src="/images/quotes.svg"
                alt="quote icon"
                style={{ height: "35px", marginBottom: "1rem" }}
              />
              <h4>{quote.name}</h4>
              <p>{quote.title}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Quotes;
