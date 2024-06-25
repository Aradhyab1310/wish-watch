// models/Book.js
import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  tags: { type: [String], required: true },
});

export default mongoose.models.Book || mongoose.model('Book', BookSchema);
