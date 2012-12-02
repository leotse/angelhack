// Config
var config = {};


// db config
var db = {};

if(!process.env.PORT) {
	db.connectionString = "mongodb://localhost:27017/angelhack";
} else {
	db.connectionString = "mongodb://angelhackto:angelhackto@ds043987.mongolab.com:43987/angelhackto";
}

config.db = db;


// export module
module.exports = config;