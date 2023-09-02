// app.js
const express = require('express');
const app = express();
const { displayBooks } = require('./Bookshelf');

app.get('/books', (req, res) => {
    const books = displayBooks();
    res.json(books);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
