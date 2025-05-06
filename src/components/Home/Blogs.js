import React from "react";
import "./Home.css";

const Blogs = () => {
  const blogPosts = [
    {
      title: "Driving Financial Inclusion At Scale",
      date: "April 8, 2025",
      image: "./images/blog/Finaware-blog-image.webp",
      link: "#",
      label: "BLOG",
    },
    {
      title: "Building Credit For Young People With Accessible Features",
      image: "./images/blog/1.png",
      link: "#",
    },
    {
      title: "Top Strategic Technology Trends For 2024",
      image: "./images/blog/3.png",
      link: "#",
    },
    {
      title: "How Automation Is Changing Customer Behaviour",
      image: "./images/blog/2.png",
      link: "#",
    },
  ];

  return (
    <section className="blogs-section">
      <h2>Our Recent Blog & Articles</h2>
      <div className="blogs-container">
        <div className="featured-blog">
          <div className="blog-card">
            <img src={blogPosts[0].image} alt="Featured" />
            <div className="blog-content">
              <span className="blog-label">{blogPosts[0].label}</span>
              <h3>{blogPosts[0].title}</h3>
              <a href={blogPosts[0].link} className="learn-more">
                Learn More <span>→</span>
              </a>
              <p className="blog-date">{blogPosts[0].date}</p>
            </div>
          </div>
        </div>
        <div className="side-blogs">
          {blogPosts.slice(1).map((post, index) => (
            <div className="side-blog-card" key={index}>
              <img src={post.image} alt={`Blog ${index + 2}`} />
              <div className="side-blog-content">
                <h4>{post.title}</h4>
                <a href={post.link} className="learn-more">
                  Learn More <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="read-more-wrapper">
        <button className="read-more-btn">Read More →</button>
      </div>
    </section>
  );
};

export default Blogs;
