import React, { useRef, useEffect, useState } from 'react';
import './Homepage.css';

function Homepage() {
  const videoRef = useRef(null);
  const inputRef = useRef(null); // Ref for the input field
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 5;
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (inputRef.current) {
      const username = inputRef.current.value.trim(); // Trim whitespace
      console.log('Form Submitted. Username:', username);

      // Validate input value
      if (!username) {
        setMessage('Please enter a username.');
        return;
      }

      try {
        const response = await fetch('https://muniversebackend.onrender.com/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user: username }),
        });

        const result = await response.json();
        console.log('Server Response:', result);

        if (result === 'success') {
          setMessage('User submitted successfully!');
          inputRef.current.value = ''; // Clear the input field directly
          console.log('Input field cleared:', inputRef.current.value); // Log the cleared input value
        } else {
          setMessage('Error submitting user.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setMessage('Failed to submit the user.');
      }
    } else {
      console.error('Input ref is not available');
    }
  };

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
      >
        <source src="/videos/homebg.mp4" type="video/mp4" />
        <source src="/videos/homebg.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="content-overlay">
        <h1>Hello goooooois</h1>
        <form onSubmit={handleSubmit} className="user-form">
          <label>
            Enter Username:
            <input
              type="text"
              ref={inputRef} // Attach the ref here
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
