'use client'
import React, { useState } from 'react';

export default function BooksPage() {
    const handlesScroll = () => {
        window.scrollBy(0, window.innerHeight);
    }
    const [bookName, setBookName] = useState('');
    const [tags, setTags] = useState('');

    const handleBookNameChange = (event) => {
        setBookName(event.target.value);
    };

    const handleTagsChange = (event) => {
        setTags(event.target.value);
    };

    return (
        <div>
            <div>
                <label htmlFor="bookName">Enter Book Name:</label>
                <input type="text" id="bookName" value={bookName} onChange={handleBookNameChange} style={{ color: 'black' }} placeholder="Enter book name" />
            </div>
            <div>
                <label htmlFor="tags">Enter Tags:</label>
                <input type="text" id="tags" value={tags} onChange={handleTagsChange} style={{ color: 'black' }} placeholder="Enter tags" />
            </div>
            <button onClick={handlesScroll} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                        submit
                    </button>
        </div>
    );  
}
