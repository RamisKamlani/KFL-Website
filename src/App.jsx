import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import BelowAbout from './components/BelowAbout';
import StarPerformers from './components/StarPerformers';
import Joining from './components/Joining';
import Reviews from './components/Reviews';
import Questions from './components/Questions';
import Footer from './components/Footer';


function App() {
  return (  
    <div>   
    <Header />
    <main style={{ padding: '0px 20px' }}>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <BelowAbout />
      <StarPerformers />
      <Joining />
      <Reviews />
      <Questions />
    </main>
    <Footer />
    </div>
  );
}

export default App;
