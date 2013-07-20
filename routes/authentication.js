var mongo = require('mongodb');

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('gusage', server, {safe: true});

db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'gusage' database");
     }
});

exports.authenticated = function(req, res) {
	var loggedIn;
	try {
		loggedIn = req.session.loggedIn;
	} catch (err) {
		console.log("Catch error " + err);
		res.send(401);
		return;
	}
	
	if ( loggedIn ) {		res.send(200);
	} else { 
		res.send(401);	} 
};

