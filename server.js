const express = require("express");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// const db = mysql.createConnection(
//     {
//       host: "127.0.0.1",
//       // MySQL Username
//       user: "root",
//       // TODO: Add MySQL Password
//       password: "password",
//       database: "books_db",
//     },
//     console.log(`Connected to the books_db database.`)
//   );
  
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
