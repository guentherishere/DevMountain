Day 1 - CRUD
Create
Read
Update
Delete

From front end to backend we use $http, a-synchronuse, paired w. a promise to get our data, MongoJS, however, uses the same $http and promise concept, but the promise will most likely be a callback instead of a promise.

MongoJS is the library that we're going to build requests on node to send to Mongo DB. So MongoJS is the bridge between node and MongoDB

To start mongo server
- mkdir mongo1_example
- atom mongo1_example
- cd mongo1_example
- touch server.js
- git init
- npm init
- sudo npm i --save express body-parser cors MongoJS
- in server.js
    - var express = require('express');
    - var express = require('cors');
    - var express = require('body-parser');
    //controller
    var SimpsonsCtrl = require('./controllers/SightingCtrl');
    //endpoint
    -app.post('/sighting', Simpsons.create)

    going to create a controller now
    - new folder named controller
    - added new file Simpson.js
    - in Simpson.js
      - var mongojs = require('mongojs'); // required js library
      - var simpsons = db.collection('simpsons'); //naming the collection. Order is database, collection, documents
      - var db = mongojs('test');
      - module.exports = {
        create: function(req, res){
          simpsons.insert(req.body, function(err, user){
            if (err) res.send(err);
            res.json(user);
            });
        },

        //query
        read: function(req, res) {
          simpsons.find(function(err, simps) {
            if (err) res.send(err);
            res.json(simps);
            });
        },

        update: function(req, res) {
          simpsons.update(
            //updates find everything w. name Bart to update coolness
          {name: "Bart"},
          {coolness: 98},
          function(err, update){
            console.log(update);
          }
          );
        }

      };
      - have to create an endpoint
        - app.get('simpson', Simpsons.read);
        - test with GET in postman
- in terminal
  - server cd ~
  - mongod
- in postman test a post request localhost:9001/simpson
- open Robomongo


req.query is an express built in query
Query is indicated by a '?' in the url
google.com/shoes?french=german

Day 2 - MongoJS vs Mongoose
Mongoose has more structure, can do validation for fields that are incorrect and what not
