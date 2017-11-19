import express from 'express';
import bodyParser from 'body-parser';
import config from './config';
import router from './router';

const app = express();
const http = require('http').Server(app);


app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.use('/api/v1', router);

app.use((err, req, res, next) => {
  console.log(err);
  // res.status(500).send('Something broke!');
});


export default app;
