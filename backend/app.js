const express = require('express');
const app = express();
const path = require('path');
const passport = require('passport');

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

// Login route
app.use(passport.initialize());
app.use(passport.session());

app.post('/login',
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/login',
    })
);

// Logout route
app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

// Example route that only allows admins to access it
app.get('/admin-panel', isAdmin, (req, res) => {
    // Render the admin panel
});

function isAdmin(req, res, next) {
    if (req.isAuthenticated() && req.user.role === 'admin') {
        return next();
    }
    res.redirect('/');
}

// Example user registration route (admin role assignment)
app.post('/register', (req, res) => {
    const { username, password, role } = req.body;

    const query = 'INSERT INTO users (username, password, role) VALUES (?, ?, ?)';

    connection.query(query, [username, password, role], (err) => {
        if (err) {
            // Handle registration errors
            return res.redirect('/register');
        }

        // Redirect to the admin panel or appropriate dashboard
        res.redirect('/dashboard');
    });
});
