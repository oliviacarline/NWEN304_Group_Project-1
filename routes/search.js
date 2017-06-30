var express = require('express');
var router = express.Router();

var connection = require('../config/config');

//changed from app to router. test
router.post('/', function (req, res) {

	if (!req.body) return res.sendStatus(400);

	var item = req.body.item;
  //replace username with item
	//var password = req.body.password;

	console.log(item);


	const results = [];

	var query = connection.query("SELECT * FROM products WHERE productname=($1)", [item]);

	query.on('row', (row) => {
		results.push(row);
	});

	query.on('end', () => {
		if(results.length > 0){

				res.redirect('/');
			}
		}else{
			console.log("item doesn't exit");
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
