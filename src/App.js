import React, { useState, useEffect } from 'react';
import './App.css'
import Navbar from './components/navbar/Navbar.jsx';
import About from './components/about/About.jsx';
import Services from './components/services/Services.jsx';
import Portfolio from './components/portfolio/Portfolio.jsx';
import Contact from './components/contact/Contact.jsx';
import Footer from './components/footer/Footer1.jsx';

function App() {
  return (
    <div className="app">
      <Navbar />
      <About />
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
