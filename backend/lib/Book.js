// Define a Book schema
class Book {
    constructor(book_id, title, author, publication_year, isbn, available = true) {
        this.book_id = book_id;
        this.title = title;
        this.author = author;
        this.publication_year = publication_year;
        this.isbn = isbn;
        this.available = available;
    }
}

// Store books in an array or use any other data structure as needed
const books = [book1, book2];

// You can access and manipulate the book objects as necessary
console.log(books);
