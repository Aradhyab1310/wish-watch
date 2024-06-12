'use client'
import React, { useState } from 'react';

export default function SuggestionsPage() {
    const handlesScroll = () => {
        window.scrollBy(0, window.innerHeight);
    }
    const [selectedOption, setSelectedOption] = useState('');
    const [tags, setTags] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleTagsChange = (event) => {
        setTags(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform any necessary actions with the selected option and tags
        console.log('Selected Option:', selectedOption);
        console.log('Tags:', tags);
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
                        Enter tags:
                        <br />
                        <input
                            type="text"
                            value={tags}
                            style={{ color: 'black' }}
                            onChange={handleTagsChange}
                            
                        />
                    </label>
                </div>
                <button onClick={handlesScroll} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                        submit
                    </button>
            </form>
        </div>
    );
}