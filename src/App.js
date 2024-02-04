import React, { useState, useEffect } from 'react';
import './App.css'
import Navbar from './components/navbar/Navbar.jsx';
import About from './components/about/About.jsx';
import Services from './components/services/Services.jsx';
import Portfolio from './components/portfolio/Portfolio.jsx';
import Contact from './components/contact/Contact.jsx';

function App() {
  return (
    <div className="app">
      <Navbar />
      <About />
      <Services/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
