import React, { useRef, useEffect } from 'react';
import './Homepage.css';  // Import a separate CSS file for styling

function Homepage() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 5;  // Adjust speed as needed
    }
  }, []);

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline  // Important for mobile playback
        className="background-video"
      >
        <source src="/videos/homebg.mp4" type="video/mp4" />
        <source src="/videos/homebg.webm" type="video/webm" /> {/* Add fallback formats */}
        Your browser does not support the video tag.
      </video>
      <div className="content-overlay">
        <h1>Hello goooooois</h1>
      </div>
    </div>
  );
}

export default Homepage;
