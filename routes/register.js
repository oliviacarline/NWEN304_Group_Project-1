var express = require('express');
var router = express.Router();

var connection = require('../config/config');

//Creating/registering a new user
//changed this from app to router. test
router.post('/', function (req, res) {

	if (!req.body) return res.sendStatus(400);

	var username = req.body.username;
	var password = req.body.password;
	/*Compute hash of password, and store that instead of password.
	See this site for details
	https://www.meetspaceapp.com/2016/04/12/passwords-postgresql-pgcrypto.html
	/*End hash of password*/
	//password = crypt('"+password+"', gen_salt('bf', 8));

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

/*TODO: Check passwords match, otherwise inform user of error and
let them try again.
Also, make it ajax call (so stays on same page)
*/
//ADDED
module.exports = router;
