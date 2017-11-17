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
    var re = new RegExp(req.body.message);
    ///re/i
    Book.find({name: re}, (err, books) => {
      if(err){
        console.log(err);
      } else {
        // console.log(books);
        res.status(200).json({allBooks: books});
      }
    })
  })

export default router;
