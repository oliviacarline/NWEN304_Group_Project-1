var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

//routes for webpages using EJS
app.get('/', function (req, res){
	res.render('index');
});

app.get('/loginpage', function (req, res){
	res.render('login');
});

app.get('/checkoutpage', function (req, res){
	res.render('checkout');
});

app.get('/productpage', function (req, res){
	res.render('product-overview');
});

app.get('/shoppingcartpage', function (req, res){
	res.render('shoppingcart');
});

//Routes
// need to set up login and register files first
var login = require('./routes/login');
var register = require('./routes/register');

app.use('/login', login);
app.use('/register', register);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, function () {
 console.log('Example app listening on port 8080!');
});


//make routes directory

//variables of relative links
//eg. var login = require('./routes/login')

//app.use('/login'. login)

//in each .js file (e.g login.js), need to put var router = express.Router();
module.exports = app;
