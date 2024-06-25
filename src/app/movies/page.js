'use client'
import React, { useState } from 'react';
import axios from 'axios';

const predefinedTags = ['Action', 'Romance', 'Horror', 'Philosophical', 'Teen', 'Fiction', 'Self-Help'];

export default function MoviesPage() {
    const handleScroll = () => {
        window.scrollBy(0, window.innerHeight);
    }
    const [movieName, setMovieName] = useState('');
    const [tag, setTag] = useState('');
    const [message, setMessage] = useState('');

    const handleMovieNameChange = (event) => {
        setMovieName(event.target.value);
    };

    const handleTagChange = (event) => {
        setTag(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/movies', {
                name: movieName,
                tags: [tag]
            });
            if (response.status === 201) {
                setMessage('Movie added successfully!');
                setMovieName('');
                setTag('');
            }
        } catch (error) {
            console.error('Error details:', error.response); // Log detailed error
            setMessage(error.response?.data?.message || 'Error adding movie');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="movieName">Enter Movie Name:</label>
                    <input
                        type="text"
                        id="movieName"
                        value={movieName}
                        onChange={handleMovieNameChange}
                        style={{ color: 'black' }}
                        placeholder="Enter movie name"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="tag">Select Tag:</label>
                    <select id="tag" value={tag} onChange={handleTagChange} style={{ color: 'black' }} required>
                        <option value="">Select a tag</option>
                        {predefinedTags.map((tag) => (
                            <option key={tag} value={tag}>{tag}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" onClick={handleScroll} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                    Submit
                </button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}
