import React, { useEffect } from 'react'
import Banner from '../../Components/Banner/Banner';
import ImageCards from '../../Components/ImageCards/ImageCards';
import Cta from '../../Components/CTA/Cta';
import Video from '../../assets/Images/socialMedia.mp4'
import BgImg from '../../assets/Images/socialMedia.jpg'
import Img1 from '../../assets/Images/LogoC.png'
const SocialMedia = () => {
    const images = [
        {
            src: Img1,
            alt: 'Image 1',
        },
        {
            src: Img1,
            alt: 'Image 1',
        },
        {
            src: Img1,
            alt: 'Image 1',
        },
        {
            src: Img1,
            alt: 'Image 1',
        },
        {
            src: Img1,
            alt: 'Image 1',
        },
        {
            src: Img1,
            alt: 'Image 1',
        },
        {
            src: Img1,
            alt: 'Image 1',
        },
        {
            src: Img1,
            alt: 'Image 1',
        },
        // Add more images as needed
    ];
    useEffect(() => {
        document.title = 'PrimePixelHub - Social Media Marketing & Management';
      }, []);
    return (
        <>
        <Banner btns={'none'} video={Video} heading={"Orchestrating Your Brand's "} spanText={"Ascent"} subHeading={" Directing Your Brand to Digital Prominence. "} para={"Greetings from the nexus of influence and innovation. We increase traffic to your website, but we also increase sales. Through targeted campaigns, we reach your audience where we are, turning likes into leads and clicks into customers."} formDisplay={'none'} columns={'col-lg-9'} />
         <ImageCards images={images} />
         <Cta heading={'Excited to See Your Brand '} backgroundImage={BgImg} spanHeading={'Shine Online? '} subHeading={"Our expertise is rooted in data analytics. We monitor trends, track performance, and derive actionable insights to optimize strategies in real-time. It's not just about posting it's about making wise decisions. "} text={"– Let's Connect, Easy as 1-2-3!"} />
       </>
  )
}

export default SocialMedia