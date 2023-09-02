// Function to fetch and display books from the backend
async function fetchBooks() {
    try {
        const response = await fetch('/api/books'); // Endpoint should match your server route
        const books = await response.json();
        
        // Display the books on your webpage
        bookDisplay(books);
    } catch (error) {
        console.error("Error fetching books:", error);
    }
}

// Function to display books on the webpage
function bookDisplay(books) {
    const bookList = document.getElementById("bookList");

    books.forEach(book => {
        const li = document.createElement("li");
        li.textContent = `${book.title} by ${book.author} (${book.publicationYear}) - ISBN: ${book.isbn}`;
        bookList.appendChild(li);
    });
}

// Call the fetchBooks function when the page loads
window.addEventListener("load", fetchBooks);
