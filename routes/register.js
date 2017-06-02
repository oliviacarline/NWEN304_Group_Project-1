var express = require('express');
var router = express.Router();
var database = 'postgres://lzffldlqkadbir:3c1cc00bb2b3b7bce086033be0a66167c9bb87c835ef455e3b60ae38cdcd27f0@ec2-23-21-220-167.compute-1.amazonaws.com:5432/dbuuirtv8ccpbj';
var pg = require('pg').native;

var router = express.Router();

//Creating/registering a new user
app.post('/', function (req, res) {

	if (!req.body) return res.sendStatus(400);

	var username = req.body.username;
	var password = req.body.password;

	var query = client.query('INSERT INTO users(username,password) VALUES($1,$2)', [username,password]);


});
