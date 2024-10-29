import React, { useState } from 'react';
import './Homepage.css';

function Homepage() {
    const [username, setUsername] = useState(''); // State for the username

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Clear the input field immediately
        setUsername('');

        try {
            // Send username to the server
            await fetch('https://muniversebackend.onrender.com/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ user: username }), // Send username in request body
            });
        } catch (error) {
            console.error('Error submitting form:', error); // Log any errors
        }
    };

    return (
        <div className="content-overlay">

            <a
                href="https://www.instagram.com/m._universe" // Replace with your Instagram link
                target="_blank" // Open in a new tab
                rel="noopener noreferrer" // Security best practices
            >
                <img
                    src={`${process.env.PUBLIC_URL}/images/insta.png`}
                    alt="Instagram"
                    className="custom-image"
                />
            </a>

            <h1>Bro Felt bored so he made a website <br></br>Hello goooooois</h1>
            <form onSubmit={handleSubmit} className="user-form">
                <label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => {
                            console.log('Username input changed:', e.target.value);
                            setUsername(e.target.value);
                        }}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Homepage;
