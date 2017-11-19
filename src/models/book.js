import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
  name: String,
  author: String,
  year: String,
  description: String
})

export default mongoose.model('Book', bookSchema);
