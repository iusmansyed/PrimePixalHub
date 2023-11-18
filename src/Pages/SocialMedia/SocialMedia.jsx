import React, { useEffect } from 'react'
import Banner from '../../Components/Banner/Banner';
import ImageCards from '../../Components/ImageCards/ImageCards';
import Cta from '../../Components/CTA/Cta';
import Video from '../../assets/Images/socialMedia.mp4'
import BgImg from '../../assets/Images/socialMedia.jpg'
import Img1 from '../../assets/Images/s1-min.jpg'
import Img2 from '../../assets/Images/s2-min.jpg'
import Img3 from '../../assets/Images/s3-min.jpg'
import Img4 from '../../assets/Images/s4-min.jpg'
import Img5 from '../../assets/Images/s5-min.jpg'
import Img6 from '../../assets/Images/s6-min.jpg'
import Img7 from '../../assets/Images/s7-min.jpg'
import Img8 from '../../assets/Images/seo8.jpg'


const SocialMedia = () => {
    const images = [
        {
            src: Img1,
            alt: 'Image 1',
        },
        {
            src: Img2,
            alt: 'Image 2',
        },
        {
            src: Img3,
            alt: 'Image 3',
        },
        {
            src: Img4,
            alt: 'Image 4',
        },
        {
            src: Img5,
            alt: 'Image 5',
        },
        {
            src: Img6,
            alt: 'Image 6',
        },
        {
            src: Img7,
            alt: 'Image 7',
        },
        {
            src: Img8,
            alt: 'Image 8',
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