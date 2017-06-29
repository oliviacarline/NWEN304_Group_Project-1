var pg = require('pg');
var connectionString = 'postgres://songshan:Chips@depot:5432/songshan_jdbc';

var connection = new pg.Client(connectionString);

connection.connect(function(err){

  if(!err) {
    console.log("Database is connected");
  } else {
    console.log("Error while connecting with database");
  }

});

module.exports = connection;
