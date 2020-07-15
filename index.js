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
app.get('/books/:id', books.get_detail_by_id);
app.put('/books/:id', books.updated_by_id);
app.delete('/books/:id', books.delete_by_id);
app.post('/books/bulk_delete', books.delete_bulk_by_judul);

app.listen(port, () => console.log(`listen in port ${port}`));