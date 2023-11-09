import React, { useEffect, useState } from 'react'
import styles from "./Home.module.css"
import Video from "../../assets/Images/bgVid.mp4"
import Buttons from '../../Components/Buttons/Buttons'
import Lottie from 'lottie-react';
import animationData from '../../assets/Lottie/Animation - 1698968147822.json';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Cta from '../../Components/CTA/Cta';
import animationData2 from '../../assets/Lottie/Animation 2.json';
import animationData3 from '../../assets/Lottie/Animation 3.json';
import animationData4 from '../../assets/Lottie/red-line';
import HoverableCard from '../../Components/Cards/Cards'
import { BiBookContent } from "react-icons/bi"
import { SiGooglemarketingplatform } from "react-icons/si"
import { GiLinkedRings } from "react-icons/gi"
import { TbBusinessplan } from "react-icons/tb"
import Accordian from '../../Components/Accordian/Accordian'
import Footer from '../../Components/Footer/Footer'
import ModalPop from '../../Components/Modal/ModalPop'
import ChatWidget from '../../Components/TawkTo/TawkToConfig'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AnimatedCursor from 'react-animated-cursor';
import { useLocation } from 'react-router-dom';
const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [txtErr, setTxtErr] = useState(false);
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    website: ''
  })
  const { firstName, lastName, email, number, website } = data
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const list = [
    {
      id: 1,
      text: "A blog is a powerful tool for engaging your audience and boosting your SEO. Our service can provide you with a consistent stream of high-quality blog posts, keeping your website fresh and engaging."
    },
    {
      id: 2,
      text: "•	Whether you require blog posts, website text, product descriptions, or any other type of online material, our SEO writing service can assist you in improving your digital footprint and increasing your online visibility."
    },
    {
      id: 3,
      text: "We don't offer one-size-fits-all solutions. Instead, we work closely with you to develop a customized content strategy that aligns with your business goals, be it brand awareness, lead generation, or customer education."
    },
    {
      id: 4,
      text: "Our content goes through a rigorous quality assurance process. We ensure that every piece is error-free, well-researched, and adheres to best SEO practices."
    },
    {
      id: 5,
      text: "We provide regular reports on the performance of your content. You'll have clear insights into how our SEO writing service is impacting your online visibility and website traffic."
    },

  ]

  const cardsDetail = [
    {
      id: 1,
      icon: <BiBookContent />,
      title: "Content Creation",
      Description: "We focus on the development and dissemination of compelling and valuable content across various social media platforms. It encompasses activities such as strategizing, generating content, and overseeing its distribution to captivate and interact with your specific audience."
    },
    {
      id: 2,
      icon: <SiGooglemarketingplatform />,
      title: "Marketing and Promotion",
      Description: "We encompass the implementation of paid advertising campaigns and tactics aimed at expanding and pinpointing the reach of your audience. It involves activities like social media advertising, collaborating with influencers, and various promotional initiatives."
    },
    {
      id: 3,
      icon: <GiLinkedRings />,
      title: "Engagement with Audiences",
      Description: "We place a strong focus on constructing and overseeing online communities, examining social media data, and applying findings to enhance your tactics. It encompasses community management, social listening, and data analysis, all aimed at guaranteeing the effectiveness and alignment of your efforts with your business objectives."
    },
    {
      id: 4,
      icon: <TbBusinessplan />,
      title: "Strategic Social Media Plan",
      Description: "Crafting a robust social media strategy tailored to your specific business goals and target audience is pivotal for achieving success in the digital landscape. This category involves the meticulous process of establishing clear objectives, strategically defining content calendars, and carefully selecting the most suitable platforms for optimal engagement and impact."
    },
  ]
  const AccordianItem = [
    {
      id: 1,
      question: "What's the Purpose of the Website?",
      answer: 'Sales, awareness, and information',
    },
    {
      id: 2,
      question: "Who is the Target Audience?",
      answer: 'Basically, they are the potential customers or the clients.',
    },
    {
      id: 3,
      question: "Do You Have Branding Guidelines?",
      answer: 'We offer the set of rules that define the overall look and feel of your brand.',
    },
    {
      id: 4,
      question: "Do You Have Design Inspiration or Examples?",
      answer: 'Yup, we believe that taking the essence of an object or a space and creating a new environment or thing based on that essence is what inspiration design is all about.',
    },
    {
      id: 5,
      question: "Is SEO a Priority?",
      answer: 'It is, it increases the visibility of your website, which equals more visitors and more opportunity to convert prospects into customers.',
    },
    {
      id: 6,
      question: "What is the Call to Action (CTA)?",
      answer: 'It is a prompt on a website that urges users to do something specific, such as sign up for a newsletter, download a demo, or buy a product.',
    },
  ];
  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Corrected "prevent" to "preventDefault"
    if (firstName != '' && email != '' && number != '') {
      try {
        const res = await fetch('https://v1.nocodeapi.com/primepixelhub/google_sheets/vbBrehfJsVjddVLR?tabId=Sheet1', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json', // Corrected "content-Type" to "Content-Type"
          },
          body: JSON.stringify([[firstName, lastName, email, number, website, new Date().toLocaleString()]])
        });
        await res.json();
        // Clear the form fields if needed
        setData({ firstName: '', lastName: '', email: '', number: '', website: '' });
        toast.success('Successfully Submitted', {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } catch (error) {
        console.log(error, "form error");
      }
    } else if (firstName == '' && email == '' && number == '') {

      setTxtErr(true)
      toast.info(`Kindly Fill Mandatory Fields`, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

    }
    else {
      toast.error('Submission Failed', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

  };
  useEffect(() => {
    document.title = 'PrimePixelHub - Home';
  }, []);

  return (
    <>
      {showModal ? '' :
        <AnimatedCursor
          innerSize={10}
          outerSize={10}
          outerAlpha={0.2}
          color='169,169,169'
          innerScale={0.7}
          outerScale={5}
          border={1}
          outerStyle={{
            zIndex: 1111111111111111111111111111111111111111111
          }}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link',
            {
              target: '.custom',
              options: {
                innerSize: 12,
                outerSize: 12,
                outerAlpha: 0.3,
                innerScale: 0.7,
                outerScale: 5
              }
            }
          ]}
        />}
      <section className={styles.home}>
        <div className={styles.banner_video}>
          <video className={styles.Video} autoPlay={true} loop={true} muted={true}>
            <source src={Video} type="video/mp4" />

          </video>
          <div className={styles.content}>
            <div className='container'>
              <div className="row">
                <div className="col-lg-7">
                  <div className={styles.bannerHeading}>
                    <h1>Elevate Your Brand with<span>Exceptional Design</span></h1>
                    <h3>Crafting Visual Excellence to Propel Your Success</h3>
                    <p>Welcome to Design Hub - the vibrant and visionary creative studio where we breathe life into your brand's dreams. Here, we don't just create visuals; we craft experiences that linger in the minds of your audience. At Design Hub, every pixel, every color, and every idea is not just carefully curated; they are meticulously woven into a tapestry of creativity to make your brand truly unforgettable. We don't see ourselves as mere designers; we are brand architects, and our mission is to shape the identity and narrative of your business in a way that resonates with your target audience. Our team of passionate creatives, strategists, and storytellers work in unison to understand the core of your brand. We believe that a brand is not just a logo or a product; it's an embodiment of your vision, values, and aspirations. We are here to bring that vision to life.</p>
                    <div className={styles.btns}>
                      <a href="tel:+798564312"><Buttons title={"Contact Us"} border={'1px solid red'} /></a>
                      <Buttons title={"Get A Qoute"} onClick={openModal} border={'1px solid red'} />
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 ">

                  <ModalPop show={showModal} handleClose={closeModal} />
                  <div className={styles.formSec}>
                    <h1>Rank Higher</h1>
                    <h3>With SEO By <span>PrimePixelHub</span></h3>
                    <form onSubmit={handleFormSubmit}>
                      <div className="form-group">
                        <label for="formGroupExampleInput"><span style={{ color: "red" }}>*</span>First Name</label>
                        <input type="text" id="formGroupExampleInput" placeholder="*Enter Your First Name" name='firstName' value={firstName} onChange={handleChange} style={{ borderColor: txtErr ? "red" : "" }} />
                      </div>
                      <div className="form-group mt-2">
                        <label for="formGroupExampleInput">Last Name</label>
                        <input type="text" id="formGroupExampleInput2" placeholder="Enter Your Last Name" name='lastName' value={lastName} onChange={handleChange} />
                      </div>
                      <div className="form-group mt-2">
                        <label for="formGroupExampleInput"><span style={{ color: "red" }}>*</span>Email</label>
                        <input type="email" id="formGroupExampleInput2" placeholder="*Enter Your Email" name='email' value={email} onChange={handleChange} style={{ borderColor: txtErr ? "red" : "" }} />
                      </div>
                      <div className="form-group mt-2">
                        <label for="formGroupExampleInput"><span style={{ color: "red" }}>*</span>Phone Number</label>
                        <input type="number" id="formGroupExampleInput2" placeholder="*Enter Your Phone Number" name='number' value={number} onChange={handleChange} style={{ borderColor: txtErr ? "red" : "" }} />
                      </div>
                      <div className="form-group mt-2 mb-3">
                        <label for="formGroupExampleInput">Website</label>
                        <input type="text" id="formGroupExampleInput2" placeholder="Enter Your Website" name='website' value={website} onChange={handleChange} />
                      </div>
                      <Buttons title={"Submit"} width={"100%"} />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.Business}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className={styles.BusinessText}>
                <h1>SEO Content that Reigns <span>Supreme</span></h1>
                <div className={styles.scrollSec}>
                  <p>In today's digital landscape, having a strong online presence is critical for any business's success. We understand the importance of well-optimized, high-quality content in delivering organic traffic to your website at our SEO writing service. Our team of experienced and skilled SEO writers is dedicated to crafting content that not only engages your audience but also ranks highly on search engines.
                  </p>
                  {list.map((i, item) => {
                    return (
                      <ul key={item}>
                        <li>
                          {i.text}
                        </li>
                      </ul>
                    )
                  })}
                </div>
                <div className={styles.btns}>
                  <a href="tel:+798564312"><Buttons title={"Contact Us"} border={"1px solid red"} /></a>
                  <Buttons title={"Get A Qoute"} border={"1px solid red"} onClick={openModal} />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <Lottie
                animationData={animationData}
                loop={true}
                autoplay={true}
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.seo_services}>
        <div className="container">
          <div className="row">
            <div className='col-lg-5'>
              <Lottie
                animationData={animationData4}
                loop={true}
                autoplay={true}
              />
            </div>
            <div className="col-lg-7">
              <div className={styles.text_wrapper}>
                <h1>Digital Dynamo <span>Turbocharge Your Brand</span></h1>
                <h3>Our digital marketing expertise will transform your aspirations into an avant-garde reality.</h3>
                <p>In the ever-changing digital universe, where the rhythms of consumer involvement dance to the melody of innovation, our digital marketing services emerge as the conductor of your brand's symphony. To establish a fascinating online presence, we choreograph a harmonic blend of SEO sorcery, social media magic, and content mastery.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cta />
      <section className={styles.seos}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div style={{ width: "100%", height: "100%" }}>

                <Lottie
                  animationData={animationData2}
                  loop={true}
                  autoplay={true}
                />
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <div className={styles.SeoWrapper}>
                <h1>Boost Business with <span>Smart</span> Social Marketing</h1>
                <p>With our Social Media Marketing skills, you can unlock your brand's full potential. In today's digital landscape, having a strong online presence is critical, and that is where we come in. Our team excels in creating customized social media strategies that align with your specific goals. We recognize that each platform offers a distinct opportunity to engage with your desired audience, enhance brand recognition, and Lead your business to success. </p>
                <ul>
                  <li>Tailored Strategies</li>
                  <li>Platform Expertise</li>
                  <li>Content Excellence</li>
                  <li>Audience Connection</li>
                  <li>Proven Success</li>
                  <li>Competitive Edge</li>
                </ul>
              </div>
              <div className={styles.btns}>
                <a href="tel:+798564312"><Buttons title={"Call Now"} border={"1px solid red"} /></a>
                <Buttons title={"Get A Free Qoute"} border={"1px solid red"} onClick={openModal} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.cardsSection}>
        <div className="container">
          <div className="row">
            {cardsDetail.map((item) => {
              return (

                <div className="col-lg-3">
                  <HoverableCard key={item.id} data={item} />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className={styles.questions}>
        <div className="container">
          <h1>Most <span>Frequently</span> Asked Question</h1>
          <div className="row">

            <div className="col-lg-6">
              <Lottie
                animationData={animationData3}
                loop={true}
                autoplay={true}
              />
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className={styles.AccWrapper}>
                {AccordianItem.map((item) => {
                  return (
                    <Accordian key={item.id} data={item} />)
                })}
              </div>

            </div>
          </div>
        </div>
      </section>
      <section>
        <Footer />
      <ChatWidget />

      </section>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default Home