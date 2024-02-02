import React, { useState, useEffect } from 'react';
import './App.css'
import Navbar from './components/navbar/Navbar.jsx';
import About from './components/about/About.jsx';
import Services from './components/services/Services.jsx';
import Portfolio from './components/portfolio/Portfolio.jsx';

function App() {
  return (
    <div className="app">
      <Navbar />
      <About />
      <Services/>
      <Portfolio/>
    </div>
  );
}

export default App;
