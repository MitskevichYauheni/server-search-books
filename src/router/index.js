import express from 'express';
import Book from '../models/book';

const router = express.Router();

router.route('/all-books')
  .get((req, res) => {
    Book.find({}, (err, books) => {
     if(err){
       console.log(err);
     } else {
       res.status(200).json({allBooks: books});
     }
    })
  })

router.route('/search-books')
  .post((req, res) => {
    const message = new RegExp(req.body.message, 'i');
    const years = req.body.years;
    let author = req.body.author;

    (years.length === 0) && years.push({year: /(?:)/});
    (author === 'Выберете автора...') ? (author = new RegExp('', 'i')) : (author = new RegExp(author, 'i'));

    Book.find({ $or: [
      {name: message, $and: [{$or: years}, {author: author}]},
      {author: message, $and: [{$or: years}, {author: author}]},
    ]}, (err, books) => {
      if(err){
        console.log(err);
      } else {
        res.status(200).json({allBooks: books});
      }
    })
  })

export default router;
