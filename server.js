const express = require('express');
const cors = require('cors');
const database = require('./app/models/db');

const app = express();

// Provides Express middleware to enable CORS with various options
var corsOptions = {
  origin: 'http://localhost:9001',
};

app.use(cors(corsOptions));

// parse request of content-type
// application/json
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// simple route

// app.get('/', (req, res) => {
//   let tableName = 'users';

//   // Query to create table

//   let query = `CREATE TABLE IF NOT EXISTS ${tableName} (
//     id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
//     firstName varchar(255),
//     lastName varchar(255),
//     phone varchar(255),
//     email varchar(255),
//     role ENUM('admin', 'regular'))`;

//   database.query(query, (err, rows) => {
//     if (err) return res.status(500).send('Table Creation Failed');
//     return res.send(`Successfully Created Table - ${tableName}`);
//   });
// });

require("./app/routes/routes.js")(app);

// set port to listen for requests
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
