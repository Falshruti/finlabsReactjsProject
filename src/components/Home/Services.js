import React from "react";
import "./Home.css";

const offerings = [
  {
    icon: "/images/services-icon/1.webp",
    title: "Products",
    description:
      "Explore a range of innovative financial tools designed to streamline your operations and maximize growth.",
    buttonText: "Browse Our Products",
  },
  {
    icon: "/images/services-icon/2.webp",
    title: "Solutions",
    description:
      "Our tailored solutions empower you to solve complex problems and achieve your unique goals.",
    buttonText: "Find Your Solution",
  },
  {
    icon: "/images/services-icon/3.webp",
    title: "Services",
    description:
      "Leverage our specialized services to tackle challenges, improve efficiency, and drive results.",
    buttonText: "Discover Our Services",
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <h2 className="services-heading">Our Offerings</h2>
      <div className="offerings-container">
        {offerings.map((item, index) => (
          <div className="offering-card" key={index}>
            <img src={item.icon} alt={`${item.title} icon`} className="offering-icon" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button className="offering-button">
              {item.buttonText}
              <span className="arrow">→</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
