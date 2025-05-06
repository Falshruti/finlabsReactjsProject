import React from 'react';
import './Home.css';

const Award = () => {
  return (
    <div className="awards-container">
      <h1 className="awards-title">Awards</h1>
      
      <div className="awards-grid">
        <div className="award-item">
          <h3 className="award-heading">Future Of Workforce Disruptor In Emerging Enterprise</h3>
          <p className="award-subheading">At Mint W3 Conclave 2023</p>
          <div className="award-laurel">
            <img src="/images/award-bg.webp" alt="laurel left" className="laurel-left" />
          </div>
        </div>

        <div className="award-item">
          <h3 className="award-heading">Runner-Up At IBM AI For Business Grand Challenge For IT Automation</h3>
          <p className="award-subheading">By Nasscom AI & IBM 2023</p>
          <div className="award-laurel">
            <img src="/images/award-bg.webp" alt="laurel left" className="laurel-left" />
          </div>
        </div>

        <div className="award-item">
          <h3 className="award-heading">Start-Up 50 Trailblazer</h3>
          <p className="award-subheading">By Dun & Bradstreet 2023</p>
          <div className="award-laurel">
            <img src="/images/award-bg.webp" alt="laurel left" className="laurel-left" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Award;