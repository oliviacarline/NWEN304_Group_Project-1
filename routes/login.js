var express = require('express');
var router = express.Router();

var connection = require('../config/config');

//changed from app to router. test
router.post('/', function (req, res) {

	if (!req.body) return res.sendStatus(400);

	var username = req.body.username;
	var password = req.body.password;

	const results = [];

	var query = connection.query("SELECT * FROM users WHERE username=($1)", [username]);

	query.on('row', (row) => {
		results.push(row);
	});

	/*Hashes password using the password in db as the salt
	If they match, then the password is correct */
	//password = crypt('"+password+"', results[0]['password']);

	query.on('end', () => {
		if(results.length > 0){
			if(results[0]['password'] == password){
				console.log('login successful');
				res.send({
					"code":200,
					"success":"login successful"
				});
			}else{
				console.log('incorrect password');
				res.send({
					"code":401,
					"failed":"username and password don't match"
				});
			}
		}else{
			console.log("username doesn't exit");
			res.send({
				"code":401,
				"failed":"username doesn't exist"
			});
		}

	});

});

//ADDED
module.exports = router;

/*TODO: redirect when user logs in successfully / make EJS header for showing when user is logged in
Also, if password incorrect, inform user and let them try again
*/
