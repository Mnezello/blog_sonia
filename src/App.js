import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import About from './components/About';
import Consultancy from './components/Consultancy';
import Qualification from './components/Qualification';
import Suggestions from './components/Suggestions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/css/App.css';

function App() {

  useEffect(() => {
    const loader = document.getElementById("loading-page");
    loader.style.display = 'none';
  },[]);
  
  return (
    <div className="App">
      <NavBar />
      <About />
      <Consultancy />
      <Qualification />
      <Suggestions />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
