const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database/first_pass.db", (err) => {
  if (!err) {
    console.log("connected to database");
  } else {
    console.log(err);
  }
});

// creating user table
db.run(
  `CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      fullName TEXT,
      email TEXT UNIQUE,
      phoneNumber TEXT UNIQUE,
      password TEXT
    )`,
  (err) => {
    if (err) throw err;
  }
);

module.exports = db;
