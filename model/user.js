//referenced https://github.com/keithyong/postgres-oauth-example/blob/master/model.js

var DB = require('../db').DB;
var knex = DB.knex;

var User = DB.Model.extend({
    tableName: 'users',
    idAttribute: 'id',
    Google: function() {
        return this.hasOne(Google, 'id');
    }
});

var Google = DB.Model.extend({
    tableName: 'google',
    idAttribute: 'id',
    User: function() {
        return this.belongsTo(User, 'id');
    }
});

// ------------------------------
// createNewUser
// ------------------------------
// Makes a new user in the database with 
// automatic incremented ID. Then, returns
// that user's ID after the user is created.
function createNewUser(callback) {
    new User().save().then(function(user) {
        callback(user.toJSON().id);
    });
}

function grabUserCredentials(userId, callback) {
    // Skeleton JSON
    var loginUser = {
        google: {
            id: userId,
            token: null,
            name: null,
            email: null,
        }
    };

    // SQL joins to get all credentials/tokens of a single user
    // to fill in loginUser JSON.
    knex.select('google.google_id as g_id', 'google.token as g_token', 'google.name as g_name', 'google.email as g_email')
                .from('users')
                .leftOuterJoin('google', 'google.id', '=', 'users.id')
                .where('users.id', '=', userId).then(function(row) {
        row = row[0];

        if (!row) {
            callback('no user found', null);
        } else {
            // Fill in loginUser JSON
            loginUser.google.googleId     = row.g_id;
            loginUser.google.token        = row.g_token;
            loginUser.google.name         = row.g_name;
            loginUser.google.email        = row.g_email;
            callback(null, loginUser);
        }
    });
};

module.exports.Google = Google;