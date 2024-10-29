import React, { useState } from 'react';
import './Homepage.css';

function Homepage() {
    const [username, setUsername] = useState(''); // State for username input
    const [message, setMessage] = useState(''); // State for feedback messages

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
    
        console.log('Form Submitted. Username:', username); // Log the submitted username
    
        // Validate input value
        if (!username.trim()) {
            setMessage('Please enter a username.');
            return;
        }
    
        try {
            const response = await fetch('https://muniversebackend.onrender.com/user', { // Update endpoint URL
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username }), // Send `username` as JSON
            });
    
            const result = await response.json();
            console.log('Server Response:', result); // Log the server response
    
            // Check if response was successful
            if (response.ok && result === 'success') {
                setMessage('User submitted successfully!'); // Success message
                setUsername(''); // Clear the input field after successful submission
            } else {
                setMessage('Error submitting user.'); // Error message on failure
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
