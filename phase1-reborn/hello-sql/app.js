const express = require('express')
const app = express()
var bodyParser = require('body-parser')

var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('./db/data.db')

// create application/json parser
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
  res.render('index')
})

app.post('/', function(req, res){
  db.run(`INSERT INTO CITIES VALUES (${req.body.id}, '${req.body.kota}', '${req.body.province}', '${req.body.gubernur}')`)
  res.redirect('/')
  // res.send(req.body)
})

app.get('/', function(req, res){
  db.all(`SELECT * FROM CITIES `, function(err, rows){
    if(!err){
      //console.log(rows);
      // res.render('index', {data:rows})
      res.send(rows)
    }
  })
})

app.listen(3000)
