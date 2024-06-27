import dbConnect from '../../../../lib/dbConnect';
import Book from '../../../../models/Book';

export async function POST(req, res) {
    await dbConnect();

try {
        const { name, tags } = req.body;
        const newBook = new Book({ name, tags });
        await newBook.save();
        res.status(201).json({ success: true, data: newBook });
    } catch (error) {
        console.error(error); // Log the error
        res.status(400).json({ success: false, message: 'Error adding book', error: error.message });
    }
    

}
