import React from 'react';
import './Home.css';

const JoinTeam = () => {
  return (
    <section className="join-team-section" 
      style={{
        backgroundImage: 'url("./images/jointeam.webp")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding:'300px 0px',
      }}
    >
      <div className="join-team-content">
        
        <button className="explore-button">
          Explore careers <span className="arrow-icon">→</span>
        </button>
      </div>
    </section>
  );
};

export default JoinTeam;