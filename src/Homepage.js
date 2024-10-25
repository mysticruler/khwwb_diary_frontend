import React, { useState } from 'react';
import './Homepage.css';

function Homepage() {
    const [username, setUsername] = useState(''); // State for username input
    const [message, setMessage] = useState(''); // State for feedback messages

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Validate input value
        if (!username.trim()) {
            setMessage('Please enter a username.');
            return;
        }

        try {
            const response = await fetch('https://muniversebackend.onrender.com/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ user: username }), // Send username in request body
            });

            const result = await response.json();
            console.log('Server Response:', result);

            // Check server response
            if (result === 'success') {
                setMessage('User submitted successfully!'); // Success message
                setUsername(''); // Clear the username state
            } else {
                setMessage('Error submitting user.'); // Error message on failure
            }
        } catch (error) {
            console.error('Error submitting form:', error);
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
                        onChange={(e) => setUsername(e.target.value)} // Update state on input change
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
