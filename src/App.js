import React, { useState } from 'react';  // Import useState from react
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Vision from './pages/Vision';
import Team from './pages/Team';
import Projects from './pages/Projects';
import Navbar from './Navbar';
import Services from './pages/Services';  // Import the Services component
import Footer from './Footer';

function App() {
  const [currentTheme, setCurrentTheme] = useState('light');  // Initialize the currentTheme state

  return (
    <Router>
      <Navbar />
      <br/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus theme={currentTheme} />} /> {/* Aboutus page with theme */}
        
        <Route path="/vision" element={<Vision />} />
        <Route path="/team" element={<Team />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />  {/* Add the Services route */}
      </Routes>

      

      <Footer />
    </Router>
  );
}

export default App;
