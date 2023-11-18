import React, { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import TopNav from './Components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'
import AnimatedCursor from 'react-animated-cursor'
import About from './Pages/About/About'
import Work from './Pages/Work/Work'
import Packages from './Pages/Packages/Packages'
import Footer from './Components/Footer/Footer'
import WebsiteDesignDevelop from './Pages/WebsiteDesignDevelop/WebsiteDesignDevelop'
import LogoDesigns from './Pages/LogoDesign/LogoDesigns'
import Animation from './Pages/Animation/Animation'
import SocialMedia from './Pages/SocialMedia/SocialMedia'
import SeoWriting from './Pages/SeoWriting/SeoWriting'
import DigitalMarketing from './Pages/DigitalMarketing/DigitalMarketing'
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
      <AnimatedCursor
        innerSize={10}
        outerSize={10}
        outerAlpha={0.2}
        color='169,169,169'
        innerScale={0.7}
        outerScale={5}
        border={1}
        outerStyle={{
          zIndex: 9999999999999999999999999999999999999999999,
        }}
        clickables={[
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          {
            target: '.custom',
            options: {
              innerSize: 12,
              outerSize: 12,
              outerAlpha: 0.3,
              innerScale: 0.7,
              outerScale: 5
            }
          }
        ]}
      />
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/WebsiteDesignDevelop" element={<WebsiteDesignDevelop />} />
        <Route path="/LogoDesigns" element={<LogoDesigns />} />
        <Route path="/Animation" element={<Animation />} />
        <Route path="/SocialMedia" element={<SocialMedia />} />
        <Route path="/SeoWriting" element={<SeoWriting />} />
        <Route path="/DigitalMarketing" element={<DigitalMarketing />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
