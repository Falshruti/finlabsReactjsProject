import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";

const Clients = () => {
  const testimonials = [
    {
      text: `It has been a cordial partnership between AADHAAR and Finlabs since 2021. We are very pleased with the professional services and Technical support extended by the Finlabs while developing our LMS and operationalizing it as per our specific educational requirements. The platform developed has increased the accessibility for thousands of students to learn STEAM. We wish the best to the Finlabs for its future endeavours .`,
      name: "Kamleshwar Singh",
      title: "CEO, AADHAAR",
      image: "./images/testimonial/kalmesh.png",
    },
    {
      text: `I came to know of Finlabs at an event organized by Network FP, I subscribed to Finlabs - Finexa for financial planning post the demo and have been using it for more than a year now. The team at Finlabs is very supportive in resolving queries and constantly looking for inputs to update their product, the financial planning report is exhaustive and very helpful. I recommend subscribing Finexa!!`,
      name: "Iqbal Shaikh",
      title: "Chief Investment Advisor, Ethical Investments",
      image: "./images/testimonial/Iqbal.jpg",
    },
    {
      text: `Finexa is a great platform for an advisor looking for using a single platform to provide his clients with a wide bouquet of services – from financial planning to transactions and then tracking of investments and a client portal. It has evolved over a period of time as they have added many modules over the last one year.`,
      name: "Prasad Rao",
      title: "",
      image: "./images/testimonial/1.png",
    },
    {
        text: `We have had one of the most wonderful experiences with Finlabs. The team is efficient and helpful. We reach out to them for any digital query we have. They are quick to respond and direct us to the right person in the team. We have recommended further too.`,
        name: "Ruchi Chopra Mitroo",
        title: "Assistant Vice President - HR  and Corporate Communication at Luthra and Luthra Law Firm",
        image: "./images/testimonial/ruchi.jpg",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section className="clients-section">
      <h2>What Our Clients Say</h2>
      <Slider {...settings} className="testimonial-slider">
        {testimonials.map((item, index) => (
          <div className="testimonial-slide" key={index}>
            <div className="testimonial-card">
              <div className="quote-icon">“</div>
              <div className="testimonial-text">{item.text}</div>
              <div className="client-info">
                <img src={item.image} alt={item.name} className="client-image" />
                <div className="client-details">
                  <h4>{item.name}</h4>
                  <p>{item.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Clients;
