// Function to fetch and display books from the backend
async function fetchBooks() {
    try {
        const response = await fetch('/books'); // Assumes your backend server is running on the same domain
        const books = await response.json();
        
        // Display the books on your webpage
        const bookList = document.getElementById("bookList");

        books.forEach(book => {
            const li = document.createElement("li");
            li.textContent = `${book.title} by ${book.author} (${book.publicationYear}) - ISBN: ${book.isbn}`;
            bookList.appendChild(li);
        });
    } catch (error) {
        console.error("Error fetching books:", error);
    }
}

// Call the fetchBooks function when the page loads
window.addEventListener("load", fetchBooks);
