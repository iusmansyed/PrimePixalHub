import React, { useEffect } from 'react'
import styles from './About.module.css'
const About = () => {
  useEffect(() => {
    document.title = 'PrimePixelHub - About-Us';
  }, []);
  return (
    <div>About</div>
  )
}

export default About