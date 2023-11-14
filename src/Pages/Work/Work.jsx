import React, { useEffect } from 'react'
import styles from './Work.module.css'
import Banner from '../../Components/Banner/Banner'
import Video from '../../assets/Images/work.mp4'
import SmoothScroll from '../../Components/GsapAnimation/SmoothScroll'
import Procedure from '../../Components/Procedure/Prodcedure'
import ProgressBar from '../../Components/ProgressBar/ProgressBar'
const Work = () => {
  useEffect(() => {
    document.title = 'PrimePixelHub - How We Work';
  }, []);
  return (
    <>
      <Banner btns={'none'} video={Video} heading={"Elevate Your Brand with"} spanText={"Exceptional Design"} subHeading={"Crafting Visual Excellence to Propel Your Success"} para={"Welcome to Design Hub - the vibrant and visionary creative studio where we breathe life into your brand's dreams. Here, we don't just create visuals; we craft experiences that linger in the minds of your audience. At Design Hub, every pixel, every color, and every idea is not just carefully curated; they are meticulously woven into a tapestry of creativity to make your brand truly unforgettable. We don't see ourselves as mere designers; we are brand architects, and our mission is to shape the identity and narrative of your business in a way that resonates with your target audience. Our team of passionate creatives, strategists, and storytellers work in unison to understand the core of your brand. We believe that a brand is not just a logo or a product; it's an embodiment of your vision, values, and aspirations. We are here to bring that vision to life."} formDisplay={'none'} columns={'col-lg-9'} />
      <SmoothScroll />
      <Procedure  />
      <ProgressBar percentage={75} />
    </>
  )
}

export default Work