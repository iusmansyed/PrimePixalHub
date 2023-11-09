import React, { useEffect } from 'react'
import styles from './About.module.css'
const About = () => {
  useEffect(() => {
    document.title = 'PrimePixelHub - About';
  }, []);
  return (
    <div className={styles.About}>About</div>
  )
}

export default About