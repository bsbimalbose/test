const express = require('express');
const app = express();
const cors = require('cors');

const { getMovies } = require('./dbconnect');
const port = 4500;
app.use(cors());
app.options('*', cors());

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/movies', (req, res) => {
  getMovies(list => {
    res.send(list);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
