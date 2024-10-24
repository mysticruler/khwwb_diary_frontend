import React, { useRef, useEffect } from 'react';
import './Homepage.css';  // Import a separate CSS file for styling

function Homepage() {
  const videoRef = useRef(null);

  useEffect(() => {
    
    if (videoRef.current) {
      videoRef.current.playbackRate = 5; 
    }
  }, []);

  return (
    <div className="video-container">
      <video ref={videoRef} autoPlay loop muted playsInline className="background-video">
        <source src="/videos/homebg.mp4" type="video/mp4" />
      </video>
      <div className="content-overlay">
        <h1>Hello goooooois</h1>
      </div>
    </div>
  );
}

export default Homepage;