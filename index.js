const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const books = require('./controllers/books');

dotenv.config();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send({
    env: process.env
  });
});

app.get('/books', books.getAll);
app.post('/books', books.createBook);

app.listen(port, () => console.log(`listen ini port ${port}`));