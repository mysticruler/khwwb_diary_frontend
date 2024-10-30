import React, { useEffect, useRef, useState } from 'react';
import './ContactForm.css'; // Import your CSS file

const ContactForm = () => {
  const [username, setUsername] = useState(''); // State for the username
  const msgRef = useRef(null);
  const formRef = useRef(null);
  const rocketRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Send username to the server
    fetch('https://muniversebackend.onrender.com/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: username }), // Send username in request body
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
      })
      .catch((error) => {
        console.error('Error submitting form:', error); // Log any errors
      });

    // Immediately start animations
    rocketRef.current.classList.add('launch'); // Add class to trigger rocket animation
    msgRef.current.style.zIndex = 2; // Bring the message to the front
    msgRef.current.style.opacity = 1; // Make the message visible

    // Reset form fields and hide the message after a delay
    setTimeout(() => {
      setUsername(''); // Clear the username
      msgRef.current.style.opacity = 0; // Fade out the message
      msgRef.current.style.zIndex = -1; // Send the message to the back
      rocketRef.current.classList.remove('launch'); // Remove class after animation
    }, 2000); // Adjust time based on your animation duration
  };

  useEffect(() => {
    const hiddens = document.querySelectorAll('.hidden');
    hiddens.forEach((hid) => hid.classList.remove('hidden'));
  }, []);

  return (
    <div className="form-container">
      <form
        id="send-it"
        className="being-sent"
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <div className="inputbox hidden" style={{ '--delay': '100ms' }}>
          <input
            placeholder='Enter what u wanna say'
            className="input-text"
            type="text"
            value={username}
            onChange={(e) => {
              console.log('Username input changed:', e.target.value);
              setUsername(e.target.value);
            }}
          />
          <button className="btn hidden" type="submit" style={{ '--delay': '400ms' }}>
            Send It
          </button>
        </div>
        <span id="msg" ref={msgRef} style={{ opacity: 0, zIndex: -1 }}>
          Sent!
        </span>
      </form>
      <span id="roket" ref={rocketRef}></span>
    </div>
  );
};

export default ContactForm;
