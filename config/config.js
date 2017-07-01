var pg = require('pg');

//var connectionString = 'postgres://postgres:chips@localhost:5432/hi';
//var connectionString = 'postgres://songshan:Chips@depot:5432/songshan_jdbc';
var connectionString = 'postgres://lzffldlqkadbir:3c1cc00bb2b3b7bce086033be0a66167c9bb87c835ef455e3b60ae38cdcd27f0@ec2-23-21-220-167.compute-1.amazonaws.com:5432/dbuuirtv8ccpbj';
var connection = new pg.Client(connectionString);

connection.connect(function(err){

  if(!err) {
    console.log("Database is connected");
  } else {
    console.log("Error while connecting with database");
  }

});

module.exports = connection;
