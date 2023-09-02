const mysql = require('mysql');

// MySQL configuration
const mysqlConfig = {
  host: 'localhost',
  user: 'root',
  password: 'AKKHIL_sharma@123',
  database: 'Library',
};

// Create a MySQL connection pool
const pool = mysql.createPool(mysqlConfig);

// Export a function to connect to the database
function connectDB() {
  return new Promise((resolve, reject) => {
    pool.getConnection((error, connection) => {
      if (error) {
        reject(error);
      } else {
        console.log('Connected to MySQL');
        resolve(connection);
      }
    });
  });
}

// Close MySQL connection when the process is terminated
process.on('SIGINT', () => {
    pool.end(() => {
      console.log('MySQL connection closed');
      process.exit(0);
    });
  });
  
module.exports = { connectDB };
