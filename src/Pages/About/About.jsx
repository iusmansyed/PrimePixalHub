import React, { useEffect } from 'react'
import styles from './About.module.css'
import Banner from '../../Components/Banner/Banner';
import Image1 from '../../assets/Images/abb.jpg'
import Video from "../../assets/Images/about.mp4"
import { Container } from 'react-bootstrap';
const About = () => {
  useEffect(() => {
    document.title = 'PrimePixelHub - About-Us';
  }, []);
  return (
    <>
      <Banner btns={'none'} video={Video} heading={"About  "} spanText={'Us'} subHeading={"-Catalyzing Digital Growth Initiatives"} para={"Our focus extends beyond digital presence. Our objective is to completely transform user experiences by making every interaction smooth, understandable, and unforgettable. Our unwavering commitment to unparalleled growth drives us toward horizons where possibilities are limitless, and success knows no bounds."} formDisplay={'none'} columns={'col-lg-9'} />
      <section className={styles.sec_1}>
        <div className="container">
          <div className="row align-items-center" >

            <div className="col-lg-5"> <div className={styles.wrapper_1}><img src={Image1} alt="" /></div></div>
            <div className="col-lg-6 offset-lg-1">
              <div className={styles.wrapper_2}>
                <h1>Excellence in Every Endeavor</h1>
                <h5>At Prime Pixel Hub, Progress is the fuel that drives our revolution ahead. Through philanthropy, volunteerism, and community endeavors, we aim to make a positive impact above our business.</h5>
                <div className={styles.listed}>
                  <ul>
                    <li>Mature Expertise</li>
                    <p>Our professionals bring a abundance of expertise, honed skills, and a proven track record that defines excellence, We handle through obstacles with accuracy, Create elegant solutions, and deliver outcomes that resonate with the wisdom of years.</p>
                    <li>Resolute Services</li>
                    <p>We understand that your success relies on our ability to deliver reliable services. That's why we go the extra mile, recognizing your needs in advance and consistently providing solutions that empower your journey toward success.</p>
                    <li>24/7 Availability</li>
                    <p>Experience peace of mind with our steadfast 24/7 availability, assuring your needs are met anytime, anywhere.</p>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.sec_2}>
        <div className="container">
          <div className='row'>
            <div className='col-lg-12' >
              <div className={styles.heading}>
                <h1>Our Dedication</h1>
                <h3>Interactive Business <span>Solutions</span></h3>
                <p>We seamlessly integrate our expertise with your unique business structures, ensuring a peaceful collaboration that maximizes impact.</p>
              </div>
            </div>


            <div className="col-lg-6">
              <div className={styles.points}>
                <h1>Our Vision</h1>
                <h3>Interactive Business Solutions</h3>
                <p>Our goal is to ensure that future generations can live in a sustainable and prosperous world by embracing environmental responsibility.</p>
              </div>
            </div>
            <div className="col-lg-6">
             <div className={styles.points}>
             <h1>Our Mission</h1>
              <h3>Interactive Business Solutions</h3>
              <p>We offer a dedicated platform for their software development needs, ensuring each project is met with the utmost quality. Come along with us as we work to translate goals into technological triumphs.</p>
           
             </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default About