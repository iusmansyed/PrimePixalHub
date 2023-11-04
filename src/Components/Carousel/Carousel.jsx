import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery
window.jQuery = $;
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
const MyCarousel = () => {
    useEffect(() => {
        $('.owl-carousel').owlCarousel({
          items: 3, // Number of items to show in the carousel
          loop: true, // Infinite loop
          margin: 10, // Space between items
          autoplay: true, // Autoplay the carousel
        });
      }, []);
  
    return (
        <div className="owl-carousel">
        <div className="item">
          <img src="image1.jpg" alt="Item 1" />
        </div>
        <div className="item">
          <img src="image2.jpg" alt="Item 2" />
        </div>
        <div className="item">
          <img src="image3.jpg" alt="Item 3" />
        </div>
      </div>
    );
  };
  
  export default MyCarousel;
  