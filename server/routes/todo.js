var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')

// Connection and Check
mongoose.connect('mongodb://localhost/mean-todos')
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('Mongo is connected')
})

// Model for collection
var todo_model = mongoose.model('Todo', {name: String})

// Routes
router.get('/todo', function (req, res, next) {
  todo_model.find(function (err, todo) {
    if (err) return console.error(err)
    else res.json(todo)
  })
})
router.get('/todo/:id', function (req, res, next) {
  todo_model.find({_id: req.params.id}, function (err, todo) {
    if (err) return console.error(err)
    else res.send(todo)
  })
})
router.get('/todo/delete/:id', function (req, res, next) {
  todo_model.find({_id: req.params.id}).remove(function (err, todo) {
    if (err) return console.error(err)
    else res.send(todo)
  })
})
router.post('/todo', function (req, res, next) {

  if (req.body.name != null) {
    // Insert Document into collection
    var temp = new todo_model({name: req.body.name})
    temp.save()
    res.json(temp)
  } else {
    res.status(404)
    res.json({
      "error": "Invalid Data"
    })
  }
})

module.exports = router
