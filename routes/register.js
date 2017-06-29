var express = require('express');
var router = express.Router();

var connection = require('../config/config');

//Creating/registering a new user
//changed this from app to router. test
router.post('/', function (req, res) {

	if (!req.body) return res.sendStatus(400);

	var username = req.body.username;
	var password = req.body.password;


	/*Begin hash of password
	See this site for details
	https://www.meetspaceapp.com/2016/04/12/passwords-postgresql-pgcrypto.html
	PS change below code*/
	var hash = crypt('"+password+"', gen_salt('bf', 8));
	password = hash;
	/*End hash of password*/

	connection.query('INSERT INTO users(username,password) VALUES($1,$2)', [username,password], function(error, results, fields) {

			if(error){
				console.log("error occurred", error);
				res.send({
					"code":400,
					"failed":"error occured"
				});
			}else{
				console.log("success");
				res.send({
					"code":200,
					"success":"user registered successfully"
				});
			}

	});

});

//Check passwords match
//Add gen_salt crypt('"+password+"',)
//Later, make it ajax call (so if pw incorrect, stays on same page)

//ADDED
module.exports = router;

//TODO: hash the password
