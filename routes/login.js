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
	//var hash = crypt('"+password+"', gen_salt('bf', 8));
	//password = hash;
	/*End hash of password*/

	const qresults = [];

	var query = connection.query("SELECT * FROM users WHERE username=($1)", [username]);

	query.on('row', (row) => {
		qresults.push(row);
	});

	query.on('end', () => {
		//console.log(results[0]['password']);

		if(qresults[0]['password'] == password){
			res.send({
				"code":200,
				"success":"login successful"
			});
		}

	});

/*
	var query = connection.query("SELECT * FROM users WHERE username=($1)", [username], function(error, results, fields) {

		if(error){
			res.send({
				"code":400,
				"error":"error occurred"
			});
		}else{

			query.on('row', (row) => {
				qresults.push(row);
			});

			query.on('end', () => {
				console.log(qresults);
				if(qresults.length > 0){
					if(qresults[0]['password'] == password){
						res.send({
							"code":200,
							"success":"login successful"
						});
					}
				}else{
						res.send({
							"code":204,
							"failed":"username and password don't match"
						});
					}
				});
			}

			//else{
				//res.send({
					//"code":204,
					//"failed":"username doesn't exist"
				//});
			//}
		//}

	});
*/

});

//Note: Redirect page to search, if login works

//ADDED
module.exports = router;

//TODO: stop getting a empty response from query.
//TODO: check hash of password
//TODO: redirect when user logs in successfully / make EJS header for showing when user is logged in
//TODO: express-sessions??? extra for experts
