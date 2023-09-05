const express = require("express");
const mysql = require("mysql2");
const fs = require("fs");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
      host: "localhost",
      user: "root",
      password: "password",
      database: "employee_db",
    },
    console.log(`Connected to the employee_db database.`)
  );
  
fs.readFile('userInput.txt', 'utf8', (err, data) => {
    if (err){
        console.error(err);
        return;
    } else{
        db.query(data);
    }
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
