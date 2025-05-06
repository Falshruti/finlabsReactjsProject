import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Home/Hero';
import Services from './components/Home/Services';
import Clients from './components/Home/Clients';
import LearningHubBanner from './components/Home/LearningHubBanner';
import Testimonial from './components/Home/Testimonial';
import Award from './components/Home/Award';
import Blogs from './components/Home/Blogs';
import Jointeam from './components/Home/Jointeam';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Clients />
        <Services />
        <LearningHubBanner />
        <Testimonial />
        <Blogs />
        <Award />
        <Jointeam />
      </main>
      <Footer />
    </div>
  );
}

export default App;