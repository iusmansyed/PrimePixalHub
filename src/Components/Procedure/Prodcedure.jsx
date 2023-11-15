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
      heading:"Lorem",
      Text:"adshfshdfaoshf ohaosdhfodsh hdsuofha uhdsiahfosd osdhafohdsaofhd adshfshdfaoshf ohaosdhfodsh hdsuofha uhdsiahfosd osdhafohdsaofhd adshfshdfaoshf ohaosdhfodsh hdsuofha uhdsiahfosd osdhafohdsaofhd adshfshdfaoshf ohaosdhfodsh hdsuofha uhdsiahfosd osdhafohdsaofhd"
    },
    {
      id: 2,
      heading:"Lorem",
      Text:"adshfshdfaoshf ohaosdhfodsh hdsuofha uhdsiahfosd osdhafohdsaofhd adshfshdfaoshf ohaosdhfodsh hdsuofha uhdsiahfosd osdhafohdsaofhd adshfshdfaoshf ohaosdhfodsh hdsuofha uhdsiahfosd osdhafohdsaofhd adshfshdfaoshf ohaosdhfodsh hdsuofha uhdsiahfosd osdhafohdsaofhd"
    },
    {
      id: 3,
      heading:"Lorem",
      Text:"adshfshdfaoshf ohaosdhfodsh hdsuofha uhdsiahfosd osdhafohdsaofhd adshfshdfaoshf ohaosdhfodsh hdsuofha uhdsiahfosd osdhafohdsaofhd adshfshdfaoshf ohaosdhfodsh hdsuofha uhdsiahfosd osdhafohdsaofhd adshfshdfaoshf ohaosdhfodsh hdsuofha uhdsiahfosd osdhafohdsaofhd"
    },
    {
      id: 4,
      heading:"Lorem",
      Text:"adshfshdfaoshf ohaosdhfodsh hdsuofha uhdsiahfosd osdhafohdsaofhd adshfshdfaoshf ohaosdhfodsh hdsuofha uhdsiahfosd osdhafohdsaofhd adshfshdfaoshf ohaosdhfodsh hdsuofha uhdsiahfosd osdhafohdsaofhd adshfshdfaoshf ohaosdhfodsh hdsuofha uhdsiahfosd osdhafohdsaofhd"
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
