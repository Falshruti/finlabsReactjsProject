// Clients.js
import React from "react";
import "./Home.css";

const clientLogos = [
  "/images/clients/1.webp",
  "/images/clients/2.webp",
  "/images/clients/3.webp",
  "/images/clients/4.webp",
  "/images/clients/5.webp",
  "/images/clients/6.webp",
  "/images/clients/7.webp",
  "/images/clients/8.png",
  "/images/clients/9.png",
];

export default function Clients() {
  return (
    <div className="clients-slider">
      <div className="clients-track">
        {clientLogos.concat(clientLogos).map((logo, index) => (
          <img src={logo} alt={`Client ${index}`} key={index} />
        ))}
      </div>
    </div>
  );
}
