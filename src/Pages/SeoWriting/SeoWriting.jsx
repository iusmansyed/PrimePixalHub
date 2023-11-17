import React, { useEffect } from 'react'
import Banner from '../../Components/Banner/Banner';
import ImageCards from '../../Components/ImageCards/ImageCards';
import Cta from '../../Components/CTA/Cta';
import Video from '../../assets/Images/seoWiriting.mp4'
import BgImg from '../../assets/Images/SEO.jpg'
import Img1 from '../../assets/Images/wr1.jpg'
import Img2 from '../../assets/Images/wr2.jpg'
import Img3 from '../../assets/Images/wr3.jpg'
import Img4 from '../../assets/Images/wr4.jpg'
import Img5 from '../../assets/Images/wr5.jpg'
import Img6 from '../../assets/Images/wr6.jpg'
import Img7 from '../../assets/Images/wr7.jpg'
import Img8 from '../../assets/Images/wr8.jpg'

const SeoWriting = () => {
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
        document.title = 'PrimePixelHub - SEO Writing';
      }, []);
  return (
    <>
    <Banner btns={'none'} video={Video} heading={"Structuring Your Articles for "} spanText={"SEO Impact"} subHeading={"Internet Visibility Increased by Strategic Writing"} para={"By adjusting to new search trends, our SEO writing remains ahead of the curve. Elevate your digital presence with SEO writing that speaks the language of search engines. At Prime pixel, we convert words into a strategic power that drives your brand to the forefront of online visibility."} formDisplay={'none'} columns={'col-lg-9'} />
     <ImageCards images={images} />
     <Cta heading={'Wondering How Keywords Can Open Doors to '} backgroundImage={BgImg} spanHeading={'Digital Success?'} subHeading={"In the fast-paced world of social media, staying ahead demands more than instinctive it demands insight. Our expertise in community management ensures your brand is part of meaningful conversations. "} text={"– Let's Make Connecting Effortless!"} />
   </>
  )
}

export default SeoWriting