const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'quickstar189',
  database: 'burgers_db'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

  // Export connection for our ORM to use.
  module.exports = connection;
  