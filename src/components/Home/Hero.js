// hero.js
import React, { useEffect, useState } from 'react';
import './Home.css';
import LeadForm from "./LeadForm";

const images = [
  './images/slide1.webp',
  './images/slide2.webp',
  './images/slide3.webp'
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <section className="hero">
        <div className="hero-left">
          <div className="tagline">TRUSTED BY LEADING GLOBAL BRANDS TO DRIVE INNOVATION AND GROWTH</div>
          <h1>Empowering Businesses With Smart & Efficient Tech Solutions.</h1>
          <p>Scalable platforms and deep industry expertise to empower growth, optimize costs, and solve real-world challenges.</p>
          <div className="hero-buttons">
          <button onClick={() => setShowForm(true)}>GET STARTED</button>
          {showForm && <LeadForm onClose={() => setShowForm(false)} />}
            <button className="btn request-demo">REQUEST A DEMO <span>&rarr;</span></button>
          </div>
        </div>
        <div className="hero-right">
          <img src={images[current]} alt="hero-slide" className="hero-image" />
        </div>
      </section>
    </>
  );
};

export default Hero;