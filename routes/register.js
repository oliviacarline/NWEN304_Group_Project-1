var express = require('express');
var router = express.Router();
var database = 'postgres://songshan:Chips@depot:5432/songshan_jdbc';
var pg = require('pg').native;

var router = express.Router();

//Creating/registering a new user
app.post('/', function (req, res) {

	if (!req.body) return res.sendStatus(400);

	var username = req.body.username;
	var password = req.body.password;

	var query = client.query('INSERT INTO users(username,password) VALUES($1,$2)', [username,password]);


});
