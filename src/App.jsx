// src/App.jsx
import './App.css';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Skills />
      <Projects/>
      
    </div>
  );
}

export default App;
