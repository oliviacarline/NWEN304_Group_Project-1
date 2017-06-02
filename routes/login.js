var express = require('express');
var router = express.Router();
var database = 'postgres://songshan:Chips@depot:5432/songshan_jdbc';
var pg = require('pg').native;

app.post('/login', function (req, res) {

	if (!req.body) return res.sendStatus(400);

	var username = req.body.username;
	var password = req.body.password;

	var results = [];

	var query = client.query("SELECT * FROM users WHERE username=($1)", [username]);

	var response = '';

	query.on('row', function(row){
	  results.push(row);
		if(row['password'] == password){
			response = 'ok';
		}
		else if(row['password'] != password){
			response = 'nope';
		}
	});

	query.on('end', function() {
		console.log(response);
	  res.end(response);
	});


});
