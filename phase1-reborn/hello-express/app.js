const express = require('express')
const app = express();
var bodyParser = require('body-parser')
const fs = require('fs')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.set('view engine', 'ejs')

app.get('/', function(req, res){
  let nama = "Nama Saya Adalah BLACKSMITH"
  res.render('index', {nama:nama})
})
app.get('/cities', function (req, res) {
  let obj = {}
  obj.nama = "Jakarta"
  obj.city = "DKI"
  res.send(obj)
})

app.get('/kota', function(req, res){
  let data = fs.readFileSync('data.json', 'utf-8')
  let json = JSON.parse(data)
  console.log(json);
  res.render('cities', {fileData: json})
})

app.post('/kota', function(req, res){
  let temp = []
  let data = fs.readFileSync('data.json', 'utf-8')
  let json = JSON.parse(data)
  json.push({"username": req.body.username, "password": req.body.password, "email": req.body.email})
  console.log(json);

  fs.writeFile('data.json', JSON.stringify(json,null,2), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');

  res.redirect('/kota')
});
})


app.listen(3000)
