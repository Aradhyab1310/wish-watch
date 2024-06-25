import dbConnect from '../../lib/dbConnect';
import Movie from '../../models/Movie';

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === 'POST') {
        try {
            const { name, tags } = req.body;
            const newMovie = new Movie({ name, tags });
            await newMovie.save();
            res.status(201).json({ success: true, data: newMovie });
        } catch (error) {
            console.error(error); // Log the error
            res.status(400).json({ success: false, message: 'Error adding movie', error: error.message });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }
}
