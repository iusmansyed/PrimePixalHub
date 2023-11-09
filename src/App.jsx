import React, { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import TopNav from './Components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Services from './Pages/Services/Services'
import AnimatedCursor from 'react-animated-cursor'
function App() {


  const [scrollClass, setScrollClass] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 700 && window.scrollY < 4200) {
        document.body.classList.add('scrolled');
        document.body.classList.remove('scrolled_2');
      } else if (window.scrollY >= 4200) {
        document.body.classList.remove('scrolled');
        document.body.classList.add('scrolled_2');
      } else {
        document.body.classList.remove('scrolled');
        document.body.classList.remove('scrolled_2');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
 
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  )
}

export default App
