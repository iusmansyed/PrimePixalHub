import React, { useEffect, useState } from 'react'
import styles from "./Home.module.css"
import Video from "../../assets/Images/bgVid.mp4"
import Buttons from '../../Components/Buttons/Buttons'
import SideForm from '../../Components/SideForm/SideForm'
import Lottie from 'lottie-react';
import animationData from '../../assets/Lottie/Animation - 1698968147822.json';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Cta from '../../Components/CTA/Cta';
import animationData2 from '../../assets/Lottie/Animation 2.json';
import animationData3 from '../../assets/Lottie/Animation 3.json';
import HoverableCard from '../../Components/Cards/Cards'
import { FaConnectdevelop } from "react-icons/fa"
import Accordian from '../../Components/Accordian/Accordian'
import Footer from '../../Components/Footer/Footer'
const Home = () => {
  const list = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ipsa porro obcaecati dolorum sequi fuga, repudiandae non in, aspernatur qui voluptatibus. Molestiae, placeat perspiciatis deserunt ipsum harum in quaerat ex!"
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ipsa porro obcaecati dolorum sequi fuga, repudiandae non in, aspernatur qui voluptatibus. Molestiae, placeat perspiciatis deserunt ipsum harum in quaerat ex!"
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ipsa porro obcaecati dolorum sequi fuga, repudiandae non in, aspernatur qui voluptatibus. Molestiae, placeat perspiciatis deserunt ipsum harum in quaerat ex!"
    },
    {
      id: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ipsa porro obcaecati dolorum sequi fuga, repudiandae non in, aspernatur qui voluptatibus. Molestiae, placeat perspiciatis deserunt ipsum harum in quaerat ex!"
    },
    {
      id: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ipsa porro obcaecati dolorum sequi fuga, repudiandae non in, aspernatur qui voluptatibus. Molestiae, placeat perspiciatis deserunt ipsum harum in quaerat ex!"
    },
    {
      id: 6,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ipsa porro obcaecati dolorum sequi fuga, repudiandae non in, aspernatur qui voluptatibus. Molestiae, placeat perspiciatis deserunt ipsum harum in quaerat ex!"
    },
    {
      id: 7,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ipsa porro obcaecati dolorum sequi fuga, repudiandae non in, aspernatur qui voluptatibus. Molestiae, placeat perspiciatis deserunt ipsum harum in quaerat ex!"
    },
    {
      id: 8,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ipsa porro obcaecati dolorum sequi fuga, repudiandae non in, aspernatur qui voluptatibus. Molestiae, placeat perspiciatis deserunt ipsum harum in quaerat ex!"
    },
    {
      id: 9,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ipsa porro obcaecati dolorum sequi fuga, repudiandae non in, aspernatur qui voluptatibus. Molestiae, placeat perspiciatis deserunt ipsum harum in quaerat ex!"
    },
  ]

  const cardsDetail = [
    {
      id: 1,
      icon: <FaConnectdevelop />,
      title: "Technical Seo",
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea enim voluptatem doloremque nam maiores earum odio aut qui, optio consequuntur iusto quam quasi quia pariatur officia dignissimos dolore, voluptate laudantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam id hic earum, incidunt quod accusamus amet quia excepturi non praesentium labore quo sunt. Rem consequatur earum obcaecati reiciendis magnam facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea enim voluptatem doloremque nam maiores earum odio aut qui, optio consequuntur iusto quam quasi quia pariatur officia dignissimos dolore, voluptate laudantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam id hic earum, incidunt quod accusamus amet quia excepturi non praesentium labore quo sunt. Rem consequatur earum obcaecati reiciendis magnam facilis."
    },
    {
      id: 2,
      icon: <FaConnectdevelop />,
      title: "Technical Seo",
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea enim voluptatem doloremque nam maiores earum odio aut qui, optio consequuntur iusto quam quasi quia pariatur officia dignissimos dolore, voluptate laudantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam id hic earum, incidunt quod accusamus amet quia excepturi non praesentium labore quo sunt. Rem consequatur earum obcaecati reiciendis magnam facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea enim voluptatem doloremque nam maiores earum odio aut qui, optio consequuntur iusto quam quasi quia pariatur officia dignissimos dolore, voluptate laudantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam id hic earum, incidunt quod accusamus amet quia excepturi non praesentium labore quo sunt. Rem consequatur earum obcaecati reiciendis magnam facilis."
    },
    {
      id: 3,
      icon: <FaConnectdevelop />,
      title: "Technical Seo",
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea enim voluptatem doloremque nam maiores earum odio aut qui, optio consequuntur iusto quam quasi quia pariatur officia dignissimos dolore, voluptate laudantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam id hic earum, incidunt quod accusamus amet quia excepturi non praesentium labore quo sunt. Rem consequatur earum obcaecati reiciendis magnam facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea enim voluptatem doloremque nam maiores earum odio aut qui, optio consequuntur iusto quam quasi quia pariatur officia dignissimos dolore, voluptate laudantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam id hic earum, incidunt quod accusamus amet quia excepturi non praesentium labore quo sunt. Rem consequatur earum obcaecati reiciendis magnam facilis."
    },
    {
      id: 4,
      icon: <FaConnectdevelop />,
      title: "Technical Seo",
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea enim voluptatem doloremque nam maiores earum odio aut qui, optio consequuntur iusto quam quasi quia pariatur officia dignissimos dolore, voluptate laudantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam id hic earum, incidunt quod accusamus amet quia excepturi non praesentium labore quo sunt. Rem consequatur earum obcaecati reiciendis magnam facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea enim voluptatem doloremque nam maiores earum odio aut qui, optio consequuntur iusto quam quasi quia pariatur officia dignissimos dolore, voluptate laudantium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam id hic earum, incidunt quod accusamus amet quia excepturi non praesentium labore quo sunt. Rem consequatur earum obcaecati reiciendis magnam facilis."
    },
  ]
  const AccordianItem = [
    {
      id: 1,
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces.',
    },
    {
      id: 2,
      question: 'How do I install React?',
      answer: 'You can install React by using create-react-app or manually setting up your project.',
    },
    {
      id: 3,
      question: 'What is JSX?',
      answer: 'JSX is a syntax extension for JavaScript, often used in React to describe what the UI should look like.',
    },
    {
      id: 4,
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces.',
    },
    {
      id: 5,
      question: 'How do I install React?',
      answer: 'You can install React by using create-react-app or manually setting up your project.',
    },
    {
      id: 6,
      question: 'What is JSX?',
      answer: 'JSX is a syntax extension for JavaScript, often used in React to describe what the UI should look like.',
    },
  ];

  return (
    <>
      <section className={styles.home}>
        <SideForm />
        <div className={styles.banner_video}>
          <video className={styles.Video} autoPlay={true} loop={true} muted={true}>
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={styles.content}>
            <div className='container'>
              <div className="row">
                <div className="col-lg-7">
                  <div className={styles.bannerHeading}>
                    <h1>Lorem-ipsum <span>dolor sit</span></h1>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ullam unde, natus doloribus praesentium libero laudantium nesciunt ducimus laboriosam magni suscipit reiciendis sit sunt. Beatae optio asperiores dolorem eveniet reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ullam unde, natus doloribus praesentium libero laudantium nesciunt ducimus laboriosam magni suscipit reiciendis sit sunt. Beatae optio asperiores dolorem eveniet reprehenderit!</p>
                    <div className={styles.btns}>
                      <Buttons title={"Contact Us"} />
                      <Buttons title={"Get A Qoute"} />
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 ">
                  <div className={styles.formSec}>
                    <h1>Rank Higher</h1>
                    <h3>With SEO By PrimePixelHub</h3>
                    <form>
                      <div className="form-group">
                        <label for="formGroupExampleInput">First Name</label>
                        <input type="text" id="formGroupExampleInput" placeholder="Example input" />
                      </div>
                      <div className="form-group mt-2">
                        <label for="formGroupExampleInput">Last Name</label>
                        <input type="text" id="formGroupExampleInput2" placeholder="Another input" />
                      </div>
                      <div className="form-group mt-2">
                        <label for="formGroupExampleInput">Email</label>
                        <input type="email" id="formGroupExampleInput2" placeholder="Another input" />
                      </div>
                      <div className="form-group mt-2">
                        <label for="formGroupExampleInput">Phone Number</label>
                        <input type="number" id="formGroupExampleInput2" placeholder="Another input" />
                      </div>
                      <div className="form-group mt-2 mb-3">
                        <label for="formGroupExampleInput">Website</label>
                        <input type="text" id="formGroupExampleInput2" placeholder="Another input" />
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
                <h1>Lorem ipsum dolor sit amet, consectetur adipisicing</h1>
                <div className={styles.scrollSec}>
                  <p>With countless businesses selling similar products or services online as yours, you need a robust SEO strategy to be ranked on the first page of Google. Let Rank by Monday assist! We offer the best SEO services to help you outperform your competitors. Our SEO experts have helped hundreds of clients adapt to Google’s ever-changing algorithms, enhancing online presence, increasing leads, and boosting revenue – now it’s your turn. Navigate your way to the most powerful SEO solutions with us;
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
                  <Buttons title={"Contact Us"} border={"1px solid black"} />
                  <Buttons title={"Get A Qoute"} border={"1px solid black"} />
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
            <div className="col-lg-12">
              <div className={styles.text_wrapper}>
                <h1>Optimize Your Website to</h1>
                <h1><span>Generate</span> <span>Qualified</span> <span>Leads</span></h1>
                <h3>Boost Your Potential to Outrank Competitors in Search Today - The Best SEO Professionals are Just a Click Away. </h3>
                <p>Did you know SEO marketing agency can give you 12.2x ROI on money spent? Why not make the most out of it while you can – let Rank by Monday take you ahead of the competition curve. We have a dedicated team of experts who can help you launch result-driven SEO campaigns. While you oversee other aspects of your business, you can always count on our team to increase your sales through smart local and off-page SEO tactics. In no time, you will experience a dramatic increase in your website traffic, lead generation, and brand awareness. </p>
              </div>
              <h1 style={{ textAlign: "center" }}>Carousel will be added here </h1>
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
                  style={{ width: "800px" }}
                />
              </div>
            </div>
            <div className="col-lg-6 offset-md-1">
              <div className={styles.SeoWrapper}>
                <h1>Full Seo Service</h1>
                <p>All your digital marketing endeavors aim to be seen by your ideal customer. The Full-Service SEO from the industry gurus at Rank by Monday can help you attain higher rankings on various search engines. Our dedicated SEO marketing plan will drive more traffic to your site and enable your brand to outrank others. </p>
                <br />
                <p>All your digital marketing endeavors aim to be seen by your ideal customer. The Full-Service SEO from the industry gurus at Rank by Monday can help you attain higher rankings on various search engines. Our dedicated SEO marketing plan will drive more traffic to your site and enable your brand to outrank others. </p>
              </div>
              <div className={styles.btns}>
                <Buttons title={"Call Now"} border={"1px solid black"} />
                <Buttons title={"Get A Free Qoute"} border={"1px solid black"} />
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
      <section style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "30vh" }}>
        <h1> Adding Carousel</h1>
      </section>
      <section className={styles.questions}>
        <div className="container">
          <h1>Most Frequently Asked Question</h1>
          <div className="row">

            <div className="col-lg-6">
              <Lottie
                animationData={animationData3}
                loop={true}
                autoplay={true}
              />
            </div>
            <div className="col-lg-5 offset-md-1">
              <div className={styles.AccWrapper}>
                {AccordianItem.map((item) => {
                  console.log(item)
                  return (
                    <Accordian key={item.id} data={item} />)
                })}
              </div>

            </div>
          </div>
        </div>
      </section>
      <section>
        <Footer/>
      </section>
    </>
  )
}

export default Home