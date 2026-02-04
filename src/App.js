import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import portfolioData from './data';
import './styles/App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for smooth UX
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar />
      <Hero personal={portfolioData?.personal} />
      <About personal={portfolioData?.personal} />
      <Skills skills={portfolioData?.skills} />
      <Education education={portfolioData?.education} />
      <Projects projects={portfolioData?.projects} />
      <Contact personal={portfolioData?.personal} />
      <Footer personal={portfolioData?.personal} />
    </div>
  );
}

export default App;
