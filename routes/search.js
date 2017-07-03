var express = require('express');
var router = express.Router();

var connection = require('../config/config');

//changed from app to router. test
router.post('/', function (req, res) {

	if (!req.body) return res.sendStatus(400);

	var item = req.body.item;


	const results = [];

	var query = connection.query("SELECT * FROM products WHERE productname=($1)", [item]);

	query.on('row', (row) => {
		results.push(row);
	});

	/*Hashes password using the password in db as the salt
	If they match, then the password is correct */
	//password = crypt('"+password+"', results[0]['password']);

	query.on('end', () => {
		if(results.length > 0){
				console.log('login successful');
				req.session.user = results[0]['item'];
				res.send({
					"code":200,
					"success":"login successful"
				});

		}else{
			console.log("username doesn't exist");
			res.send({
				"code":404,
				"failed":"username doesn't exist"
			});
		}

	});

});

//ADDED
module.exports = router;
