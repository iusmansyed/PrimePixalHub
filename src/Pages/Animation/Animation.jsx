import React, { useEffect } from 'react'
import Banner from '../../Components/Banner/Banner';
import ImageCards from '../../Components/ImageCards/ImageCards';
import Cta from '../../Components/CTA/Cta';
import Video from '../../assets/Images/animation.mp4'
import BgImg from '../../assets/Images/animation.jpg'
import Img1 from '../../assets/Images/LogoC.png'
const Animation = () => {
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
        document.title = 'PrimePixelHub - 2D/3D Animation';
      }, []);
    return (
        <>
            <Banner btns={'none'} video={Video} heading={"Transforming Ideas into Motion with"} spanText={" Animation Wizardry"} subHeading={"Precision and Passion in Animation Artistry"} para={"Our team doesn't just animate. They emit an extraordinary enthusiasm, bringing life to every frame. We collaborate closely with our clients, grasping their intended outcome and infusing it with our expertise. The result is animations that not only meet tactical objectives but also leave a lasting impression on audiences"} formDisplay={'none'} columns={'col-lg-9'} />
            <ImageCards images={images} />
            <Cta spanColor={"purple"} heading={'Ready to Give Your Ideas the'} backgroundImage={BgImg} spanHeading={' Animation Makeover? '} subHeading={"Reach Out to Our Animation Experts for Strategic Consultation. Where Each member brings a distinct point of view to the table, contributing to a dynamic and vibrant inventive environment."} text={"– Let's Dive into Possibilities!"} />
        </>
    )
}

export default Animation