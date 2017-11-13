var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var bookSchema = mongoose.Schema({
  name: String,
  author: String,
  year: Number,
  description: String
})

module.exports = mongoose.model('Book', bookSchema);
