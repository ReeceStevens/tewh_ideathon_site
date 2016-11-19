/************************************************/
/* Project: 	Stupid Hackathon Code			*/
/* Authors: 	Reece Stevens 					*/
/* 				Abhishek Pratapa				*/
/*												*/
/* Version 		0.1 [BETA]						*/
/* 												*/
/* File: 		server.js 						*/
/*												*/
/* Methods: [authenticate, ]					*/
/*												*/
/************************************************/

/*************** IMPORTS SECTION ****************/

// Express import
var express 	= require('express');
var app 		= express();

// Parser import
var bodyParser  = require('body-parser');

// Debug Morgan import
var morgan      = require('morgan');

// Database modeler import
var mongoose    = require('mongoose');

// Token import
var jwt    		= require('jsonwebtoken');

// Import path for the program
var path    = require("path");

// Import the checksum, to verify our tokens (extra security)
var checksum = require('checksum');

// imports for the uploads
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

// Setup database connection and ports for the cloud app
var port = process.env.PORT || 80;
mongoose.connect(config.database);
var db = mongoose.connection;

// Set some app configurations
app.set('superSecret', config.secret);
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DEFAILT
// index file on start-up
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname+'/views/index.html'));

});

app.listen(port);
console.log('Magic happens at http://localhost:' + port);
