import express from 'express';
import morgan from 'morgan';
import winston from './config/winston';

const app = express();

app.use(morgan('combined', { stream: winston.stream }));

app.get('/', (req, res) => res.send('Received a GET HTTP method'));

app.post('/', (req, res) => res.send('Received a POST HTTP method'));

app.put('/', (req, res) => res.send('Received a PUT HTTP method'));

app.delete('/', (req, res) => res.send('Received a DELETE HTTP method'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  winston.info(`Example app listening on port ${port}!`);
});

module.exports.app = app;
