var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('./db/data.db')

function createTable(){
  db.run(`CREATE TABLE CITIES (id INTEGER, Kota VARCHAR(225), Province VARCHAR(225), Gubernur VARCHAR(225))`)
  console.log("table created");
}



createTable()
