var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 8080;
var path = require('path');
var pg = require('pg');
var connectionString = "postgres://lzffldlqkadbir:3c1cc00bb2b3b7bce086033be0a66167c9bb87c835ef455e3b60ae38cdcd27f0@ec2-23-21-220-167.compute-1.amazonaws.com:5432/dbuuirtv8ccpbj";

var client = new pg.Client(connectionString);
client.connect();

//Routes
// need to set up login and register files first
var login = require('./routes/login');
var register = require('./routes/register');

app.use('/login', login);
app.use('/register', register);


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

/*
//To be moved to login.js (or register???) in /routes
app.post('/newUser', function (req, res) {

	if (!req.body) return res.sendStatus(400);

	var username = req.body.username;
	var password = req.body.password;

	var query = client.query('INSERT INTO users(username,password) VALUES($1,$2)', [username,password]);


});


//To be moved to login.js in /routes
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
*/


//make routes directory

//variables of relative links
//eg. var login = require('./routes/login')

//app.use('/login'. login)

//in each .js file (e.g login.js), need to put var router = express.Router();
