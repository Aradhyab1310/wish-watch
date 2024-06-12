'use client'
import Image from 'next/image';
import book from "@/public/jpg/book.jpg";

export default function Home(){
    
    return (
        <div className="hero">
                <div className="flex-1 pt-36 padding-x">
                    <h1 className="text-3xl font-bold">Welcome to Wish Watch</h1>
                    <p className="text-lg">Your one stop for all things that you enjoy</p>
                    <Image
                        src={book} // Replace with the correct image path
                        width={1000}
                        height={500}
                        alt="Books"
                    />

                </div>
            </div>
    );
};

