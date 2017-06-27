var express = require('express');
var router = express.Router();
var connectionString = 'postgres://lzffldlqkadbir:3c1cc00bb2b3b7bce086033be0a66167c9bb87c835ef455e3b60ae38cdcd27f0@ec2-23-21-220-167.compute-1.amazonaws.com:5432/dbuuirtv8ccpbj';
var pg = require('pg');
//var app = express();

var client = new pg.Client(connectionString);
client.connect();

//changed from app to router. test
router.post('/', function (req, res) {

	console.log("in login");

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

//ADDED
module.exports = router;
