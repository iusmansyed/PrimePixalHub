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
    <Banner btns={'none'} video={Video} heading={"Elevate Your Brand with"} spanText={"Exceptional Design"} subHeading={"Crafting Visual Excellence to Propel Your Success"} para={"Welcome to Design Hub - the vibrant and visionary creative studio where we breathe life into your brand's dreams. Here, we don't just create visuals; we craft experiences that linger in the minds of your audience. At Design Hub, every pixel, every color, and every idea is not just carefully curated; they are meticulously woven into a tapestry of creativity to make your brand truly unforgettable. We don't see ourselves as mere designers; we are brand architects, and our mission is to shape the identity and narrative of your business in a way that resonates with your target audience. Our team of passionate creatives, strategists, and storytellers work in unison to understand the core of your brand. We believe that a brand is not just a logo or a product; it's an embodiment of your vision, values, and aspirations. We are here to bring that vision to life."} formDisplay={'none'} columns={'col-lg-9'} />
    <ImageCards images={images} />
    <Cta heading={'Logos with Impact, Websites'} backgroundImage={BgImg} spanHeading={'with Wow'} subHeading={"We breathe life into design. From eye-catching logos that embody your brand's essence to websites that leave a lasting digital footprint, we're your creative partners. Our passion lies in transforming ideas into visually stunning realities."} text={"– let's build something extraordinary together!"} />
</>
  )
}

export default SocialMedia