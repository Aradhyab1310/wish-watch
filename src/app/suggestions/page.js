'use client'
import React, { useState } from 'react';
import axios from 'axios';

const predefinedTags = ['Action', 'Romance', 'Horror', 'Philosophical', 'Teen', 'Fiction', 'Self-Help'];

export default function SuggestionsPage() {
    const handleScroll = () => {
        window.scrollBy(0, window.innerHeight);
    }
    const [selectedOption, setSelectedOption] = useState('');
    const [tag, setTag] = useState('');
    const [suggestion, setSuggestion] = useState(null);
    const [message, setMessage] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        setTag('');
    };

    const handleTagChange = (event) => {
        setTag(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!selectedOption || !tag) {
            setMessage('Please select an option and enter tags.');
            return;
        }

        try {
            const response = await axios.get('/api/suggestions', {
                params: {
                    type: selectedOption,
                    tag: tag
                }
            });
            if (response.status === 200) {
                setSuggestion(response.data);
                setMessage('');
            }
        } catch (error) {
            console.error('Error details:', error.response); // Log detailed error
            setMessage('No suggestions found or invalid tag.');
            setSuggestion(null);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Choose an option:
                        <br />
                        <input
                            type="radio"
                            value="movie"
                            checked={selectedOption === 'movie'}
                            onChange={handleOptionChange}
                            required
                        />
                        Movie
                        <br />
                        <input
                            type="radio"
                            value="books"
                            checked={selectedOption === 'books'}
                            onChange={handleOptionChange}
                        />
                        Books
                    </label>
                </div>
                <div>
                    <label>
                        Select Tag:
                        <br />
                        <select value={tag} onChange={handleTagChange} style={{ color: 'black' }} required>
                            <option value="">Select a tag</option>
                            {predefinedTags.map((tag) => (
                                <option key={tag} value={tag}>{tag}</option>
                            ))}
                        </select>
                    </label>
                </div>
                <button type="submit" onClick={handleScroll} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                    Submit
                </button>
            </form>
            {message && <p>{message}</p>}
            {suggestion && (
                <div>
                    <h3>Suggestion:</h3>
                    <p>Name: {suggestion.name}</p>
                    <p>Tags: {suggestion.tags.join(', ')}</p>
                </div>
            )}
        </div>
    );
}
