const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'host',
    password: 'AKKHIL_sharma@123',
    database: 'library'
});

passport.use(new LocalStrategy(
    (username, password, done) => {
        const query = 'SELECT * FROM users WHERE username = ?';

        connection.query(query, [username], (err, rows) => {
            if (err) { return done(err); }
            if (!rows.length) { return done(null, false); }
            
            const user = rows[0];
            
            if (user.password !== password) { return done(null, false); }

            return done(null, user);
        });
    }
));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    const query = 'SELECT * FROM users WHERE id = ?';

    connection.query(query, [id], (err, rows) => {
        done(err, rows[0]);
    });
});
