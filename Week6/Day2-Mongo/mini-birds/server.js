var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongojs = require('mongojs');
var app = express();

//mongo database name is birds, and the collection name is sightings
var db = mongojs('birds', ['sightings']);
app.use('/', bodyParser.json());
var port = 27017;

//port listener
var port = process.argv[2] || 1337;
app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Listening on Port:" + port)
  }
});

var message = {
  "message": "hello world"
};

//middleware
app.use('/', bodyParser.json());
app.use('/', cors());

//endpoints
app.post('/api/sighting', function(req, res){
	db.sightings.insert(req.body, function(err, result){
		if(err){
			return res.status(500).json(err);
		}
		else{
			return res.json(result);
		}
	});
})
app.get('/api/sighting', function(req, res){
	console.log(req.query);
	db.sightings.find(req.query, function(err, bird){
		if(!err){
			res.json(bird);
		} else {
			res.status(500).json(err)
		}
	});
})
app.delete('/api/sighting', function(req, res){
	db.sightings.remove(req.query, function(err, result){
		if(!err){
			res.status(418).json(result);
		} else {
			res.status(500).json(err);
		}
	});
})
app.put('/api/sighting', function(req, res){
	db.sightings.update(req.query, req.body, function(err, result){
		if(err) res.status(500).json(err);
		else res.json(result);
	});
});
