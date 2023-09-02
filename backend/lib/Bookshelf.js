// bookController.js
const { books } = require('./books');

function displayBooks() {
    return books.map(book => ({
        title: book.title,
        author: book.author,
        publicationYear: book.publication_year,
        isbn: book.isbn
    }));
}

module.exports = { displayBooks };
