import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Procedure.css';

gsap.registerPlugin(ScrollTrigger);

const Procedure = () => {
  useEffect(() => {
    const steps = gsap.utils.toArray('.step');

    steps.forEach((step, index) => {
      gsap.fromTo(
        step,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: step,
            start: 'top 80%', // Adjust the start position as needed
            end: 'top 50%', // Adjust the end position as needed
            scrub: true,
          },
        }
      );
    });
  }, []);

  const Steps = [
    {
      id: 1,
      heading:"Brand Essence",
      Text:"The core of a brand serves as its soul, ensuring that it appears genuine and constant. This involves distilling your core values, identifying the personality that defines your aspirations for the future. We collaborate to create a story that goes beyond products or services, tapping into the emotional connection you have with your customers."
    },
    {
      id: 2,
      heading:"Visual",
      Text:"We furnish Visual presentation innovation. A visually appealing design not only draws attention but also encourages exploration. Stay ahead of trends and surprise our audience with a website that not only meets expectations but exceeds them."
    },
    {
      id: 3,
      heading:"Optimization",
      Text:"A responsive website is no longer a luxury, it is a requirement. Optimization is a conversion booster in addition to attracting visitors. We enhance your logo to its most basic components, guaranteeing recognition and clarity right away."
    },
    {
      id: 4,
      heading:"Fulfillment",
      Text:"With focus on every detail, we ensure that your logo stands as a beacon of distinction, ready to represent your brand with clarity, effect, and enduring style. It's more than just a mark on the surface, it's a powerful communicator that creates a lasting emotional bond."
    },
  ];

  return (
    <div>
      <section className='procedure'>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading">
                <h1>Our <span>Procedure</span></h1>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="steps">
                {Steps.map((step, index) => (
                  <div key={index} className="step">
                    <h1>{step.heading}</h1>
                    <p>{step.Text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Procedure;
