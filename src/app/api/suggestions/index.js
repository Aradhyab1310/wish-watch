import dbConnect from '../../lib/dbConnect';
import Book from '../../models/Book';
import Movie from '../../models/Movie';

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === 'GET') {
        const { type, tag } = req.query;

        try {
            let suggestion;
            if (type === 'books') {
                suggestion = await Book.findOne({ tags: tag });
            } else if (type === 'movie') {
                suggestion = await Movie.findOne({ tags: tag });
            }

            if (suggestion) {
                res.status(200).json(suggestion);
            } else {
                res.status(404).json({ success: false, message: 'No suggestions found for the given tag' });
            }
        } catch (error) {
            console.error(error); // Log the error
            res.status(500).json({ success: false, message: 'Server error', error: error.message });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }
}
