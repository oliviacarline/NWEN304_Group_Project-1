//var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
//var app = express();
var port = process.env.PORT || 8080;

/*Start https---------------------
Testing out https - sourced mostly from link below
https://stackoverflow.com/questions/5998694/how-to-create-an-https-server-in-node-js
Need to generate privatekey.pem and certificate.pem using the following commands:
openssl genrsa -out privatekey.pem 1024
openssl req -new -key privatekey.pem -out certrequest.csr
password for above = httpstestpassword
openssl x509 -req -in certrequest.csr -signkey privatekey.pem -out certificate.pem
*/

var fs = require('fs');
var http = require('http'); //Test, if works then remove this line
var https = require('https');

var privateKey = fs.readFileSync('privatekey.pem').toString();
var certificate = fs.readFileSync('certficate.pem').toString(); //Oops spelt certficate wrong when creating key.

var credentials = {
  key: privateKey,
  cert: certificate
};

//Moved from top of file, down to here
var express = require('express');
var app = express();
/*End https ------------------------*/

//Setup PostgreSQL db
//NOTE: pg wasdeleted
//var client = new pg.Client(connectionString);
//client.connect();

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

//Change below to https.createServer(options, app).listen(.....

app.listen(port, function () {
 //https.createServer(credentials, app).listen(port, function () {
 console.log('Example app listening on port 8080!');
});

//Https Change
//module.exports = app;
module.exports = https;
