import React, { useEffect } from 'react'
import Banner from '../../Components/Banner/Banner';
import ImageCards from '../../Components/ImageCards/ImageCards';
import Cta from '../../Components/CTA/Cta';
import Video from '../../assets/Images/digiMarket.mp4'
import BgImg from '../../assets/Images/digimarketing.jpg'
import Img1 from '../../assets/Images/digi1.jpg'
import Img2 from '../../assets/Images/digi2.jpg'
import Img3 from '../../assets/Images/digi3.jpg'
import Img4 from '../../assets/Images/digi4.jpg'
import Img5 from '../../assets/Images/digi5.jpg'
import Img6 from '../../assets/Images/digi6.jpg'
import Img7 from '../../assets/Images/digi7.jpg'
import Img8 from '../../assets/Images/digi8.jpg'

const DigitalMarketing = () => {
    const images = [
        {
            src: Img1,
            alt: 'Image 1',
        },
        {
            src: Img2,
            alt: 'Image 1',
        },
        {
            src: Img3,
            alt: 'Image 1',
        },
        {
            src: Img4,
            alt: 'Image 1',
        },
        {
            src: Img5,
            alt: 'Image 1',
        },
        {
            src: Img6,
            alt: 'Image 1',
        },
        {
            src: Img7,
            alt: 'Image 1',
        },
        {
            src: Img8,
            alt: 'Image 1',
        },
        // Add more images as needed
    ];
   const listedItems=[
        {
            text:'Proven track record of digital success',
        },
        {
            text:'Holistic strategies tailored to your unique brand',
        },
        {
            text:'Proven track record of digital success',
        },
    ]
    useEffect(() => {
        document.title = 'PrimePixelHub - Digital Marketing';
      }, []);
    return (
        <>
        <Banner btns={'none'} video={Video} heading={"Ignite Your Digital Presence: "} spanText={"Elevate, Engage, Excel!"} subHeading={"Pixel-Perfect Strategies, Your Gateway to Digital Dominance "} para={"At Prime Pixel Hub, we don't just embrace the digital landscape, we redefine it. Our team of seasoned digital marketers and creative wizards is dedicated to weaving strategies that resonate. We blend artistry and analytics for a digital masterpiece."} formDisplay={'none'} columns={'col-lg-9'} />
         <ImageCards images={images} />
         <Cta heading={'Why Prime Pixel Hub?'} backgroundImage={BgImg} list={listedItems} spanHeading={'Hub?'}  text={"– Ready to enhance your brand's digital footprint?"} />
       </>
  )
}

export default DigitalMarketing