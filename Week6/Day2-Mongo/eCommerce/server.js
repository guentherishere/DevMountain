// 'use strict';
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

//port listener
var port = process.argv[2] || 1336;
app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Listening on Port:" + port);
  }
});

//express middleware
app.use(express.static(__dirname + '/public'));
app.use('/', bodyParser.json());
app.use('/', cors());

//endpoints
app.post('/api/store', function(req, res){
	db.store.insert(req.body, function(err, result){
		if(err){
			return res.status(500).json(err);
		}
		else{
			return res.json(result);
		}
	});
});
app.get('/api/store', function(req, res){
	console.log(req.query);
	db.store.find(req.query, function(err, product){
		if(!err){
			res.json(product);
		} else {
			res.status(500).json(err);
		}
	});
});
app.put('/api/store', function(req, res){
	db.store.update(req.query, req.body, function(err, result){
		if(err) res.status(500).json(err);
		else res.json(result);
	});
});
app.delete('/api/store', function(req, res){
	db.store.remove(req.query, function(err, result){
		if(!err){
			res.status(418).json(result);
		} else {
			res.status(500).json(err);
		}
	});
});
