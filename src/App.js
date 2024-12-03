import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Features from './components/Features';
import Teams from './components/Teams';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Download from './components/Download';
import Footer from './components/Footer';
import Video from './components/Video';

// Import required CSS
import './assets/css/animate.css';
import './assets/css/style.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Video />
      <Features />
      <Teams />
      <Testimonials />
      <FAQ />
      <Contact />
      <Download />
      <Footer />
    </>
  );
};
export default App;