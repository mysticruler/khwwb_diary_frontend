import React, { useState } from 'react';
import './Homepage.css';
import ContactForm from './ContactForm';

function Homepage() {



  return (
    <div className="content-overlay">

      <a
        href="https://www.instagram.com/m._universe"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={`${process.env.PUBLIC_URL}/images/instaM.png`}
          alt="Instagram"
          className="custom-image instaM"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/milankoshyjohn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={`${process.env.PUBLIC_URL}/images/linkedin.png`}
          alt="LinkedIn"
          className="custom-image linkedin"
        />
      </a>
      <a
        href="https://open.spotify.com/playlist/0n2CK3XeUzRRqUEv7WPLPD?si=6d7d475652274821"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={`${process.env.PUBLIC_URL}/images/spotify.png`}
          alt="Spotify"
          className="custom-image spotify"
        />
      </a>
      <a
        href="https://www.youtube.com/@MilanCrusher"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={`${process.env.PUBLIC_URL}/images/youtube.png`}
          alt="YouTube"
          className="custom-image youtube"
        />
      </a>
      <a
        href="https://www.instagram.com/milan_koshy_john/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={`${process.env.PUBLIC_URL}/images/insta.png`}
          alt="Instagram"
          className="custom-image insta"
        />
      </a>

      <h1>Bro Felt bored so he made a website <br></br>Hello goooooois</h1>
      <ContactForm />

    </div>
  );
}

export default Homepage;
