import mongoose from 'mongoose';
import config from './config';

mongoose.connect(config.db);
mongoose.Promise = Promise;

const mongoConnection = new Promise((resolve, reject) => {
  mongoose.connection.on('connected', resolve)
                     .on('error', reject);
})


module.exports = Promise.all([
  mongoConnection
])
