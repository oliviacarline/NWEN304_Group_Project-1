
var connection = require('../config/config');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {

  var username =  req.session.user;

  if(username == null){
    console.log('null id');
    res.redirect("/loginpage");
    return;
  }

  var query = connection.query("SELECT * FROM login_details WHERE username=($1)", [username], function(error, results, fields) {

    console.log(results);

    res.render('profile.ejs', {user:username});

  });

});

module.exports = router;
