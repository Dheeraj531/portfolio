import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/portfolio');
        setPortfolioData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching portfolio data:', error);
        setLoading(false);
      }
    };

    fetchData();
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
