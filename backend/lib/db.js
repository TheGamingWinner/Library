const mysql = require('mysql');

// MySQL configuration
const mysqlConfig = {
  host: 'localhost',
  user: 'root',
  password: 'AKKHIL_sharma@123',
  database: 'Library',
};

// Create a MySQL connection
const mysqlConnection = mysql.createConnection(mysqlConfig);

mysqlConnection.connect((err) => {
  if (err) {
    console.error('MySQL connection error:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// Close MySQL connection when the process is terminated
process.on('SIGINT', () => {
  mysqlConnection.end(() => {
    console.log('MySQL connection closed');
    process.exit(0);
  });
});

module.exports = mysqlConnection;