// models/Movie.js
import mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  tags: { type: [String], required: true },
});

export default mongoose.models.Movie || mongoose.model('Movie', MovieSchema);
