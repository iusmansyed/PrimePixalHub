import React, { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import TopNav from './Components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Services from './Pages/Services/Services'
import { motion } from 'framer-motion'
function App() {
  const [count, setCount] = useState(0)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  useEffect(() => {
    const handleCursor = (e) => {
      console.log(e.clientX, e.clientY);
      setX(e.clientX - 20)
      setY(e.clientY - 15)
    }
    window.addEventListener("mousemove", handleCursor)
    return () => {
      window.removeEventListener("mousemove", handleCursor)

    }
  }, [])

  return (
    <>
      <motion.div className='cursor-custom' animate={{
        x,
        y,
      }}>
        <motion.div className='cursor-custom2' animate={{

        }}></motion.div>
      </motion.div>
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
