const url = require('url');
const Pool = require('pg-pool');

// the local DB URL needs to be changed to your own settings
let localDBUrl = "postgres://lzffldlqkadbir:3c1cc00bb2b3b7bce086033be0a66167c9bb87c835ef455e3b60ae38cdcd27f0@ec2-23-21-220-167.compute-1.amazonaws.com:5432/dbuuirtv8ccpbj";
let databaseUrl = process.env.DATABASE_URL || localDBUrl;
let params = url.parse(databaseUrl);
let auth = params.auth.split(':');

let config = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: true   // NOTICE: if connecting on local db, this should be false
};

const pool = new Pool(config);

module.exports = pool;


