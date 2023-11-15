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
      <Banner btns={'none'} video={Video} heading={"Brand Building with Definitive "} spanText={"Designs"} subHeading={"Beyond Aesthetics: Definitive Designs in Brand Equity"} para={"In the ever-evolving business landscape, where establishing a strong and memorable presence is crucial, the foundation of a successful brand rests on its visual identity. At the core of this identity is the creation of a logo that transcends mere aesthetics. The process involves more than just crafting a visually appealing symbol; it's about imbuing that symbol with meaning, embodying the values and essence of the brand. In a world where design trends swiftly come and go, the challenge is to strike a delicate balance between staying current and fostering enduring designs. The logo becomes a dynamic representation of the brand's character, capable of adapting to contemporary tastes while retaining a timeless quality. This duality is essential in ensuring that the brand remains relevant and resonant across different eras and audience preferences. As a brand navigates the shifting sands of design trends, the logo serves as a beacon of consistency and recognition. It becomes a visual shorthand for the brand's story, instantly conveying its personality, values, and aspirations to the audience. The thoughtful creation of a logo involves a deep understanding of the brand's identity, target audience, and the broader cultural context in which it exists."} formDisplay={'none'} columns={'col-lg-9'} />
      <SmoothScroll />
      <Procedure  />
      <ProgressBar percentage={75} />
    </>
  )
}

export default Work


