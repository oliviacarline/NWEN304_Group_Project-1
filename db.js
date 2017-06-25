var pg = require('pg'),
var knex = require('knex');

var url = 'postgres://lzffldlqkadbir:3c1cc00bb2b3b7bce086033be0a66167c9bb87c835ef455e3b60ae38cdcd27f0@ec2-23-21-220-167.compute-1.amazonaws.com:5432/dbuuirtv8ccpbj';

var knex = require('knex')({
	client: 'pg',
	debug: true,
	connection: url + '?ssl=true'
});

knex.schema.hasTable('users', function(done) {
	console.log(done)
}).then();

var DB = require('bookshelf')(knex);

module.exports.DB = DB;