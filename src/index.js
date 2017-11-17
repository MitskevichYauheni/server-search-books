import config from './config';
import appReady from './initializers';
import server from './server';

appReady.then(connected => {
          startServer();
        })
        .catch(error => {
          console.log(error);
          console.log('\nNo connection to mongodb!');
        })


const startServer = () => {
  server.listen(config.port, () => {
    console.log('Server is up ' + config.port);
  })
}
