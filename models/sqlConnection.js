var mysql = require('mysql');  
var sqlConnection = mysql.createConnection({  
    host: 'localhost',  
    user: 'root',  
    password: 'root',  
    database: 'test'  
});
sqlConnection.connect(function(err){
  if(err){
    console.log('Error connecting to db');
    return;
  }
  console.log('connection success...!');
});
module.exports = sqlConnection;