var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var Book = require('./models/book');


mongoose.connect('mongodb://localhost:27017/book')

var app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})



app.post('/all-books', function(req, res){
   Book.find({}, function(err, books) {
     if(err){
       console.log(err);
     } else {
      //  console.log(books);
       res.status(200).json({allBooks: books});
     }
   })
 })

 app.post('/search-books', function(req, res){
  var re = new RegExp(req.body.message);
  ///re/i
  Book.find({name: re}, function(err, books) {
      if(err){
        console.log(err);
      } else {
        // console.log(books);
        res.status(200).json({allBooks: books});
      }
    })
  })

app.get('/', function(req, res){
  res.send('Hello in browser')
})

app.listen(8080, function() {
  console.log('Server is up!');
});
