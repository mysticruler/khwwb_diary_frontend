import React, { useRef, useEffect, useState } from 'react';
import './Homepage.css';  // Import a separate CSS file for styling

function Homepage() {
  const videoRef = useRef(null);
  const [username, setUsername] = useState(''); // State to handle username input
  const [message, setMessage] = useState('');   // State to display the response message

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 5;  // Adjust speed as needed
    }
  }, []);

  const handleSubmit = async (e) => {
   
    try {
      const response = await fetch('https://muniversebackend.onrender.com/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: username }),
    });
    

      const result = await response.json();
      if (result === 'success') {
        setMessage('User submitted successfully!');
      } else {
        setMessage('Error submitting user.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Failed to submit the user.');
    }
  };

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
        <form onSubmit={handleSubmit} className="user-form">
          <label>
            Enter Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}  // Handle input change
              required
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        {message && <p>{message}</p>}  {/* Display the response message */}
      </div>
    </div>
  );
}

export default Homepage;
