// src/BackgroundVideo.js
import React from 'react';
import './BackgroundVideo.css'; // Import your CSS file if you have one
import Video from "../../../assets/Images/home-video-new.mp4"

function BackgroundVideo() {
  return (
    <div className="background-video">
      <video autoPlay loop muted>
        <source src={Video} type="video/mp4" />
      </video>
    </div>
  );
}

export default BackgroundVideo;
