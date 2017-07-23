var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var app = new express()

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// app.set('views', path.join(__dirname, 'src')) // app.set('view engine', 'ejs')// app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'dist')));
var index = require('./server/routes/index')
var todo = require('./server/routes/todo')
app.use('/', index)
app.use('/api', todo)
app.listen(3000, function () {
  console.log('Server is running on port 3000')
})
