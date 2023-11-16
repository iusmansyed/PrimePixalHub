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
      <Banner btns={'none'} video={Video} heading={"Brand Building with Definitive "} spanText={"Designs"} subHeading={"Beyond Aesthetics: Definitive Designs in Brand Equity"} para={"In the dynamic landscape of business, where first impressions matter more than ever, the cornerstone of a successful brand lies in its visual identity. At the heart of brand building is the creation of a logo that goes beyond aesthetics. In a world where design trends evolve rapidly, we strike a balance between staying current and creating timeless designs."} formDisplay={'none'} columns={'col-lg-9'} />
      <SmoothScroll />
      <Procedure  />
      <ProgressBar percentage={75} />
    </>
  )
}

export default Work


