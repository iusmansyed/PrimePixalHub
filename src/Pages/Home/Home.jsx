import React, { useEffect, useState } from 'react'
import styles from "./Home.module.css"
import Video from "../../assets/Images/bgVid.mp4"
import Buttons from '../../Components/Buttons/Buttons'
import SideForm from '../../Components/SideForm/SideForm'
import Lottie from 'lottie-react';
import animationData from '../../assets/Lottie/Animation - 1698968147822.json';
const Home = () => {

  return (
    <>
      <section className={styles.home}>
        <SideForm />
        <div className={styles.banner_video}>
          <video autoPlay={true} loop={true} muted={true}>
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
                  <ul>
                    <li><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ipsa porro obcaecati dolorum sequi fuga, repudiandae non in, aspernatur qui voluptatibus. Molestiae, placeat perspiciatis deserunt ipsum harum in quaerat ex!</p></li>
                    <li><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ipsa porro obcaecati dolorum sequi fuga, repudiandae non in, aspernatur qui voluptatibus. Molestiae, placeat perspiciatis deserunt ipsum harum in quaerat ex!</p></li>
                    <li><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ipsa porro obcaecati dolorum sequi fuga, repudiandae non in, aspernatur qui voluptatibus. Molestiae, placeat perspiciatis deserunt ipsum harum in quaerat ex!</p></li>
                    <li><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ipsa porro obcaecati dolorum sequi fuga, repudiandae non in, aspernatur qui voluptatibus. Molestiae, placeat perspiciatis deserunt ipsum harum in quaerat ex!</p></li>
                    <li><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ipsa porro obcaecati dolorum sequi fuga, repudiandae non in, aspernatur qui voluptatibus. Molestiae, placeat perspiciatis deserunt ipsum harum in quaerat ex!</p></li>
                    <li><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ipsa porro obcaecati dolorum sequi fuga, repudiandae non in, aspernatur qui voluptatibus. Molestiae, placeat perspiciatis deserunt ipsum harum in quaerat ex!</p></li>
                    <li><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ipsa porro obcaecati dolorum sequi fuga, repudiandae non in, aspernatur qui voluptatibus. Molestiae, placeat perspiciatis deserunt ipsum harum in quaerat ex!</p></li>
                    <li><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ipsa porro obcaecati dolorum sequi fuga, repudiandae non in, aspernatur qui voluptatibus. Molestiae, placeat perspiciatis deserunt ipsum harum in quaerat ex!</p></li>
                  </ul>
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
    </>
  )
}

export default Home