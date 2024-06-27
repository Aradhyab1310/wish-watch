'use client'
import React, { useState } from 'react';
import axios from 'axios';

const predefinedTags = ['Action', 'Romance', 'Horror', 'Philosophical', 'Teen', 'Fiction', 'Self-Help'];

export default function BooksPage() {
    const handleScroll = () => {
        window.scrollBy(0, window.innerHeight);
    }
    const [bookName, setBookName] = useState('');
    const [tag, setTag] = useState('');
    const [message, setMessage] = useState('');

    const handleBookNameChange = (event) => {
        setBookName(event.target.value);
    };

    const handleTagChange = (event) => {
        setTag(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/books', {
                name: bookName,
                tags: [tag]
            });
            if (response.status === 201) {
                setMessage('Book added successfully!');
                setBookName('');
                setTag('');
            }
        } catch (error) {
            console.error('Error details:', error.response); // Log detailed error
            setMessage(error.response?.data?.message || 'Error adding book');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="bookName">Enter Book Name:</label>
                    <input
                        type="text"
                        id="bookName"
                        value={bookName}
                        onChange={handleBookNameChange}
                        style={{ color: 'black' }}
                        placeholder="Enter book name"
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
