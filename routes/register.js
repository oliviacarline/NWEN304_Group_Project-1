var express = require('express');
var router = express.Router();
var connectionString = 'postgres://lzffldlqkadbir:3c1cc00bb2b3b7bce086033be0a66167c9bb87c835ef455e3b60ae38cdcd27f0@ec2-23-21-220-167.compute-1.amazonaws.com:5432/dbuuirtv8ccpbj';
var pg = require('pg');

var client = new pg.Client(connectionString);
client.connect();

//var app = express();

//Creating/registering a new user
//changed this from app to router. test
router.post('/', function (req, res) {

	console.log("in register");

	if (!req.body) return res.sendStatus(400);

	var username = req.body.username;
	var password = req.body.password;

	/*Begin hash of password*/
	var hash = crypt('"+password+"', gen_salt('bf', 8));
	/*End hash of password*/

	var query = client.query('INSERT INTO users(username,password) VALUES($1,$2)', [username,hash]);


});

//Check passwords match
//Add gen_salt crypt('"+password+"',)
//Later, make it ajax call (so if pw incorrect, stays on same page)

//ADDED
module.exports = router;
