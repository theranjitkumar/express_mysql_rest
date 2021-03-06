var express = require('express');
var mysql = require('mysql'); 
var bodyParser = require('body-parser');
var r = express.Router();
var con = require('../models/sqlConnection');
var user = require('../models/user');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* CURD actions.... */
r.get('/', function(req, res, next) {
  con.query('select * from student',function(err, rows){
    res.send({allEmployees:rows});
  });
});
r.get('/:id', function(req, res, next) {
  con.query('select * from student where id=?',[req.params.id],function(err, rows){
    res.send({employee:rows});
  });
});
r.delete('/:id', function(req, res, next) {
  con.query('delete from student where id=?',[req.params.id],function(err, rows){
    res.send({employee:rows});
  });
});
r.post('/', function(req, res, next) {
  con.query('insert into student(id, name, city)values(?,?,?)',[req.body.id,req.body.name,req.body.city],function(err, rows){
    res.send({employee:rows});
  });
});
r.put('/:id', function(req, res, next) {
  con.query('update student set name=?,city=? where id=?',[req.body.name,req.body.city,req.params.id],function(err, rows){
    res.send({employee:rows});
  });
});

module.exports = r;
