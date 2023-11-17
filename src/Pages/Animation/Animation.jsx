import React, { useEffect } from 'react'
import Banner from '../../Components/Banner/Banner';
import ImageCards from '../../Components/ImageCards/ImageCards';
import Cta from '../../Components/CTA/Cta';
import Video from '../../assets/Images/animation.mp4'
import BgImg from '../../assets/Images/animation.jpg'
import Img1 from '../../assets/Images/2d1.jpg'
import Img2 from '../../assets/Images/2d2.jpg'
import Img3 from '../../assets/Images/2d3.jpg'
import Img4 from '../../assets/Images/2d4.jpg'
import Img5 from '../../assets/Images/3d1.jpg'
import Img6 from '../../assets/Images/3d2.jpg'
import Img7 from '../../assets/Images/3d3.jpg'
import Img8 from '../../assets/Images/3d4.jpg'


const Animation = () => {
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