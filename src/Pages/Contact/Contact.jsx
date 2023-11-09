import React, { useEffect } from 'react'
import styles from "./contact.module.css"
const Contact = () => {
  useEffect(() => {
    document.title = 'PrimePixelHub - Contact';
  }, []);
  return (
    <div>Contact</div>
  )
}

export default Contact