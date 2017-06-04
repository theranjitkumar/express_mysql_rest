var express = require('express');
var mysql = require('mysql'); 
var bodyParser = require('body-parser');
var db = require('./sqlConnection');
var user = {  
    getAllUsers: function(callback) {
        return db.query("Select * from user", callback);  
    },  
    getUserById: function(id, callback) {  
        return db.query("select * from user where Id=?", [id], callback);  
    },  
    addUser: function(user, callback) {  
        return db.query("Insert into user values(?,?,?)", [user.Id, user.Title, user.Status], callback);  
    },  
    deleteUser: function(id, callback) {  
        return db.query("delete from user where Id=?", [id], callback);  
    },  
    updateUser: function(id, user, callback) {  
        return db.query("update user set Title=?,Status=? where Id=?", [user.Title, user.Status, id], callback);  
    }  
};  
module.exports = user; 

