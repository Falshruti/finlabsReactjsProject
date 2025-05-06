import React from "react";
import "./Home.css";

const LearningHub = () => {
  return (
    <section
      className="learninghub-section"
      style={{
        backgroundImage: 'url("/images/learninghub_banner.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding:'40px 0px',
        marginTop: '20px',
      }}
    >
      <div className="learninghub-overlay">
        <div className="learninghub-content">
          <div className="learninghub-text">
            <h1>Transform Training With Finlabs Learning Hub</h1>
            <p>
              Simplify learning and development for your team with our plug-and-play,
              mobile first training platform.
            </p>
            <button className="explore-btn">
              EXPLORE MORE <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningHub;
