//var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
//var app = express();
var port = process.env.PORT || 8080;
var path = require('path');
var pg = require('pg');
var connectionString = "postgres://lzffldlqkadbir:3c1cc00bb2b3b7bce086033be0a66167c9bb87c835ef455e3b60ae38cdcd27f0@ec2-23-21-220-167.compute-1.amazonaws.com:5432/dbuuirtv8ccpbj";

var client = new pg.Client(connectionString);
client.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//Routes
// need to set up login and register files first
var login = require('./routes/login');
var register = require('./routes/register');

app.use('/login', login);
app.use('/register', register);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

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
var http = require('http');

var privateKey = fs.readFileSync('privatekey.pem').toString();
var certificate = fs.readFileSync('certificate.pem').toString();

var credentials = {
  privateKey: privateKey,
  certificate: certificate
};

//Moved from top of file, down to here
var app = express();
var express = require('express');

//Change below to https.createServer(options, app).listen(.....
//NOTE: above wasn't working, testing again with original code

app.listen(port, function () {
 console.log('Example app listening on port 8080!');
});
/*End https ------------------------*/

//Https Change
//module.exports = app;
module.exports = https;
