var express = require('express');
var router = express.Router();

var connection = require('../config/config');

//changed from app to router. test
router.post('/', function (req, res) {

	if (!req.body) return res.sendStatus(400);

	var username = req.body.username;
	var password = req.body.password;

	connection.query("SELECT * FROM users WHERE username=($1)", [username], function(error, results, fields) {

		console.log(results);

		if(error){
			res.send({
				"code":400,
				"error":"error occurred"
			});
		}else{
			if(results.length > 0){
				if(results[1]['password'] == password){
					res.send({
						"code":200,
						"success":"login successful"
					});
				}else{
					res.send({
						"code":204,
						"failed":"username and password don't match"
					});
				}
			}
			else{
				res.send({
					"code":204,
					"failed":"username doesn't exist"
				});
			}
		}

	});


});

//ADDED
module.exports = router;
