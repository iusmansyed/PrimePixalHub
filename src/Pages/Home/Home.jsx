import React from 'react'
import styles from "./Home.module.css"
import Video from "../../assets/Images/bgVid.mp4"
const Home = () => {
    return (
        <div className={styles.banner_video}>
        <video autoPlay loop muted>
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.content}>
          <h1>Welcome to Our Website</h1>
          <p>Explore our amazing content and services.</p>
        </div>
      </div>
    )
}

export default Home