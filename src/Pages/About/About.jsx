import React, { useEffect } from 'react'
import styles from './About.module.css'
import Banner from '../../Components/Banner/Banner';
import AnimatedCursor from 'react-animated-cursor';
const About = () => {
  useEffect(() => {
    document.title = 'PrimePixelHub - About';
  }, []);
  return (
    <>
      <AnimatedCursor
        innerSize={10}
        outerSize={10}
        outerAlpha={0.2}
        color='169,169,169'
        innerScale={0.7}
        outerScale={5}
        border={1}
        outerStyle={{
          zIndex: 9999999999999999999999999999999999999999999
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
      />
      <Banner heading={"Lorem ipsum dolor sit amet"} spanText={"Lorem ipsum"} subHeading={"lorem ipsum dolor sit amet , consectetur adipiscing"} para={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} />
    </>
  )
}

export default About