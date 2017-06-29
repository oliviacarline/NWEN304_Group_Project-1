var express = require('express');
var router = express.Router();

var connection = require('../config/config');

//changed from app to router. test
router.post('/', function (req, res) {

	if (!req.body) return res.sendStatus(400);

	var username = req.body.username;
	var password = req.body.password;

	console.log(username);
	console.log(password);

	/*Begin hash of password
	See this site for details
	https://www.meetspaceapp.com/2016/04/12/passwords-postgresql-pgcrypto.html
	PS change below code*/
	var hash = crypt('"+password+"', gen_salt('bf', 8));
	password = hash;
	/*End hash of password*/

	const results = [];

	var query = connection.query("SELECT * FROM users WHERE username=($1)", [username]);

	query.on('row', (row) => {
		results.push(row);
	});

	query.on('end', () => {
		if(results.length > 0){
			if(results[0]['password'] == password){
				console.log('login successful');
				res.send({
					"code":200,
					"success":"login successful"
				});
				res.render('/checkout');
			}else{
				console.log('incorrect password');
				res.send({
					"code":204,
					"failed":"username and password don't match"
				});
			}
		}else{
			console.log("username doesn't exit");
			res.send({
				"code":204,
				"failed":"username doesn't exist"
			});
		}

	});

});

//Note: Redirect page to search, if login works

//ADDED
module.exports = router;

//TODO: check hash of password
//TODO: redirect when user logs in successfully / make EJS header for showing when user is logged in
