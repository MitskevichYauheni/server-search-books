import express from 'express';
import Book from '../models/book';

const router = express.Router();

router.route('/all-books')
  .get((req, res) => {
    Book.find({}, (err, books) => {
     if(err){
       console.log(err);
     } else {
      //  console.log(books);
       res.status(200).json({allBooks: books});
     }
    })
  })

router.route('/search-books')
  .post((req, res) => {
    const message = new RegExp(req.body.message, 'i')

    Book.find({ $or: [
      {name: message},
      {author: message}
    ]}, (err, books) => {
      if(err){
        console.log(err);
      } else {
        res.status(200).json({allBooks: books});
      }
    })
  })

export default router;
