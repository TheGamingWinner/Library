const express = require('express');
const app = express();
const path = require('path');

// Import database-related functions from db.js
const { connectDB, getBooks } = require('./lib/db');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Set up routes for API and front-end
app.get('/api/books', async (req, res) => {
    try {
        // Get books from the database using getBooks function
        const books = await getBooks();

        // Send the books as JSON response
        res.json(books);
    } catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Serve your HTML page that uses index.js
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, async () => {
    console.log(`Server is running on port ${port}`);
    // Connect to the database using connectDB function
    await connectDB();
});
