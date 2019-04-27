import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('Received a GET HTTP method'));

app.post('/', (req, res) => res.send('Received a POST HTTP method'));

app.put('/', (req, res) => res.send('Received a PUT HTTP method'));

app.delete('/', (req, res) => res.send('Received a DELETE HTTP method'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
