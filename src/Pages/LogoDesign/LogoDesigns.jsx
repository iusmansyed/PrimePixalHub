import React, { useEffect } from 'react'
import Banner from '../../Components/Banner/Banner'
import ImageCards from '../../Components/ImageCards/ImageCards'
import Cta from '../../Components/CTA/Cta'
import BgImg from '../../assets/Images/logo-designer.jpg'
import Video from '../../assets/Images/logoDesign.mp4'
import Img1 from '../../assets/Images/Logo1.jpg';
import Img2 from '../../assets/Images/Logo2.jpg';
import Img3 from '../../assets/Images/Logo3.jpg';
import Img4 from '../../assets/Images/Logo4.jpg';
import Img5 from '../../assets/Images/Logo5.jpg';
import Img6 from '../../assets/Images/Logo6.webp';
import Img7 from '../../assets/Images/Logo7.webp';
import Img8 from '../../assets/Images/Logo8.webp';








const LogoDesigns = () => {
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
        document.title = 'PrimePixelHub - Logo Designs';
    }, []);
    return (
        <>
            <Banner btns={'none'} video={Video} heading={"A Glimpse into Our Smart "} spanText={"Logo Ensemble."} subHeading={"Our Signature Logos, Your Unique Identity. "} para={"The stories we tell aren't just visual they're strategic, deliberate, and deeply connected to the core of every brand we touch. Our Each logo narrates a story, capturing attention and leaving an indelible mark."} formDisplay={'none'} columns={'col-lg-9'} />
            <ImageCards images={images} />
            <Cta heading={'Ready for a Logo That '} backgroundImage={BgImg} spanHeading={'Commands Attention? '} subHeading={"Our expertise serves as the anchor, providing stability and assurance to our clients. It's not just about what we know, it's about how we apply that knowledge to bolster your brand, enhance your undertakings, and surpass your expectations. Let's Commence on the next chapter of your visual journey together. "} text={"– Experts at Your Service, Consultation on the House!"} />
        </>
    )
}

export default LogoDesigns