import React, { useEffect } from 'react'
import Banner from '../../Components/Banner/Banner'
import Video from "../../assets/Images/website.mp4"
import Cta from '../../Components/CTA/Cta'
import BgImg from '../../assets/Images/website.jpg'
import ImageCards from '../../Components/ImageCards/ImageCards'
import Img0 from '../../assets/Images/imgg0.jpg';
import Img2 from '../../assets/Images/imgg2.jpg';
import Img3 from '../../assets/Images/imgg3.jpg';
import Img4 from '../../assets/Images/imgg4.jpg';
import Img5 from '../../assets/Images/imgg5.jpg';
import Img01 from '../../assets/Images/imgg01.jpg';
import Img7 from '../../assets/Images/imgg7.jpg';
import Img8 from '../../assets/Images/imgg8.jpg';







const WebsiteDesignDevelop = () => {
  const images = [
    {
        src: Img0,
        alt: 'Image 0',
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
        src: Img01,
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
];    useEffect(() => {
    document.title = 'PrimePixelHub - Website Designing & Development';
  }, []);
  return (
    <>
      <Banner btns={'none'} video={Video} heading={"Sculpting Digital Legacies with "} spanText={"Expertise"} subHeading={"Visioning the Future: Beyond Trends, Beyond Expectations"} para={"We don't just build websites; we Artfully digital experiences. Everything pertaining to a website's usability and visual appeal is governed by its web design. Beyond the surface, our development team ensures that your website is robust, adaptable, and optimized for peak performance. We breathe life into your digital vision through meticulous coding and programming. Regardless of whether you're a new business trying to make an online presence or an established brand aiming to rejuvenate your digital image, Our Company is your partner in success. Our dedication extends beyond creating websites to include creating digital stories that have an enduring influence."} formDisplay={'none'} columns={'col-lg-9'} />
      <ImageCards images={images} />
      <Cta heading={'Your Challenges, Our'} backgroundImage={BgImg} spanHeading={'Solutions!'} subHeading={"A chance to decode the secrets of comprehensive success. Are you ready to sculpt your business narrative uniquely? Click here to spark the conversation, where brilliance meets strategy, and innovation is the language we speak fluently."} text={"– Claim Your Free Consultation by our design experts!"} />
    </>
  )
}

export default WebsiteDesignDevelop