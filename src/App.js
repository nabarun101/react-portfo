import './App.css';
import React from 'react'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';

function App() {
  return(
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/about-us" element={<About />}/>
        <Route exact path="/projects" element={<Projects />}/>
        <Route exact path="/contact" element={<Contact />}/>
      </Routes>
    </Router>
    </>
    );
}

export default App;
