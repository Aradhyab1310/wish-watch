'use client'
import React, { useState } from "react";


export default function MoviesPage() {
    const handlesScroll = () => {
        window.scrollBy(0, window.innerHeight);
    }
    const [movieName, setMovieName] = useState("");
    const [tags, setTags] = useState("");

    const handleMovieNameChange = (event) => {
        setMovieName(event.target.value);
    };

    const handleTagsChange = (event) => {
        setTags(event.target.value);
    };

    return (
        <div>
            <label htmlFor="bookName">Enter Movie Name:</label>
            <input
                type="text"
                value={movieName}
                onChange={handleMovieNameChange}
                style={{ color: 'black' }}
                placeholder="Enter movie name"
            />
            <label htmlFor="bookName">Enter Tags:</label>
            <input
                type="text"
                value={tags}
                onChange={handleTagsChange}
                style={{ color: 'black' }}
                placeholder="Enter tags"
            />
        <button onClick={handlesScroll} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                        submit
                    </button>
        </div>
        
    );
}