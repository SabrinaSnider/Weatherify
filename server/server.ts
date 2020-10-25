import express from 'express';
import bodyParser from 'body-parser';
import apiRouter from './controllers';
import config from './config';
import cors from 'cors';

const app: express.Application = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('App is listening on port 3000!');
});

app.use('/api', apiRouter);
