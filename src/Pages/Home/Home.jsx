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
import { FaConnectdevelop } from "react-icons/fa"
import Accordian from '../../Components/Accordian/Accordian'
import Footer from '../../Components/Footer/Footer'
import ModalPop from '../../Components/Modal/ModalPop'
import ChatWidget from '../../Components/TawkTo/TawkToConfig'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Corrected "prevent" to "preventDefault"
    if (firstName != '' && email != '' && number != '') {
      try {
        const res = await fetch('https://v1.nocodeapi.com/syedusman/google_sheets/zhEMyYBjMbGyUndL?tabId=Sheet1', {
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
      console.log(emp, 'in fuc');
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

  return (
    <>

      <section className={styles.home}>
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
                <h1>Optimize Your Website to</h1>
                <h1><span>Generate</span> <span>Qualified</span> <span>Leads</span></h1>
                <h3>Boost Your Potential to Outrank Competitors in Search Today - The Best SEO Professionals are Just a Click Away. </h3>
                <p>Did you know SEO marketing agency can give you 12.2x ROI on money spent? Why not make the most out of it while you can – let Rank by Monday take you ahead of the competition curve. We have a dedicated team of experts who can help you launch result-driven SEO campaigns. While you oversee other aspects of your business, you can always count on our team to increase your sales through smart local and off-page SEO tactics. In no time, you will experience a dramatic increase in your website traffic, lead generation, and brand awareness. </p>
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
            <div className="col-lg-6 offset-md-1">
              <div className={styles.SeoWrapper}>
                <h1>Full <span>SEO</span> Service</h1>
                <p>All your digital marketing endeavors aim to be seen by your ideal customer. The Full-Service SEO from the industry gurus at Rank by Monday can help you attain higher rankings on various search engines. Our dedicated SEO marketing plan will drive more traffic to your site and enable your brand to outrank others. </p>
                <br />
                <p>All your digital marketing endeavors aim to be seen by your ideal customer. The Full-Service SEO from the industry gurus at Rank by Monday can help you attain higher rankings on various search engines. Our dedicated SEO marketing plan will drive more traffic to your site and enable your brand to outrank others. </p>
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
            <div className="col-lg-5 offset-md-1">
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
      </section>
      <ChatWidget />
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