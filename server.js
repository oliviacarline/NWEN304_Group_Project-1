var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 8080;
var path = require('path'); 
var pg = require('pg');
var connectionString = "postgres://songshan:Chips@depot:5432/songshan_jdbc"; //users, products

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
	 // Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', '*')
	 // // Request methods you wish to allow
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	 // Request headers you wish to allow ,
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-AllowHeaders');
	 // Pass to next layer of middleware
	next();
});

app.get('/', function (req, res) {
 res.send('Hello World!');
});

app.listen(port, function () {
 console.log('Example app listening on port 8080!');
});

app.post('/newUser', function (req, res) {

	if (!req.body) return res.sendStatus(400);

	var username = req.body.username;
	var password = req.body.password;
	
	var query = client.query('INSERT INTO users(username,password) VALUES($1,$2)', [username,password]);
	
	
});
