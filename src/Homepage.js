import React, { useState } from 'react';
import './Homepage.css';

function Homepage() {
    const [username, setUsername] = useState(''); // State for username input
    const [message, setMessage] = useState(''); // State for feedback messages

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
    
        // Clear the input field immediately
        setUsername(''); // This will clear the input field
    
        try {
            // Log the submitted username
            const response = await fetch('https://muniversebackend.onrender.com/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ user: username }), // Send username in request body
            });
    
            // Check server response and update message accordingly
            if (response.ok) {
                setMessage('Username submitted successfully!');
            } else {
                setMessage('Failed to submit username.');
            }
        } catch (error) {
            console.error('Error submitting form:', error); // Log any errors
            setMessage('Failed to submit the user.'); // Generic error message
        }
    };
    

    return (
        <div className="content-overlay">
            <h1>Hello goooooois</h1>
            <form onSubmit={handleSubmit} className="user-form">
                <label>
                    Enter Username:
                    <input
                        type="text"
                        value={username} // Controlled input bound to username state
                        onChange={(e) => {
                            console.log('Username input changed:', e.target.value); // Log input change
                            setUsername(e.target.value); // Update state on input change
                        }} // Update state on input change
                        required // Ensure input is required
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
            {message && <p>{message}</p>} {/* Display feedback message */}
        </div>
    );
}

export default Homepage;
