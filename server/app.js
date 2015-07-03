/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var mongoose = require('mongoose');
//var mysql = require('mySql');
//var sequelize = require('sequelize');
//var connection = mysql.createConnection({
//    host     : 'localhost',
//    user     : 'ruchi',
//    password : '1234',
//    database : 'test'
//});

//var sequelize = new sequelize('test', 'ruchi', '1234', {
//    host: 'localhost',
//    dialect: 'mysql'
//});

var config = require('./config/environment');
//console.log("CONNECTION:",connection);
console.log("CONFIG:", config);

// Connect to database
mongoose.connect(config.mongo.uri, config.mongo.options);

// Setup server
var app = express();
var server = require('http').createServer(app);
require('./config/express')(app);
require('./routes')(app);

// Start server
server.listen(config.port, config.ip, function () {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
var exports = module.exports = app;