//Constructors and Prototypes
//Instructor: Dan Kesler

/* Prototypes
  // functions
  // object
  // array
  // number
  // array
  // boolean
  // string */

array.prototype.thisser = function(){
  console.log(this);
}

function Array.thisser()

var array = [1,2,3];

arr.thisser()

//returns [1,2,3]

Array.prototype.push = function(x){
  this[this.length] = x;
};

arr.pushs(4);

arr
//returns [1,2,3,4];

//another example
// want to be able to do
//"thing".stringPlus(" is a dumb");

String.prototype.stringPlus = function(x){
    return this + x;
};

"thing".stringPlus(" is a dumb");

//<------------------------------------------------->
//
//Constructors
//
//<------------------------------------------------->

//Constructor returns an object

 var User = function(name) {
  this.name = name;
};

var Dan = new User("Dan");

var steve = new User("steve");

//prototype + constructor example
User.prototype.sayName = function() {
  return this.name;
};

dan.sayName();

//one more prototype example
//prototype for birds
// constructors are functions that return objects

var Bird = function(name) {
  this.name = name;
  this.color = color;
};

var Seagull = new Bird("Frank", "White");

Bird.prototype.cacaw = function(){
  return this.name + "says cacaw";
};

seagull.cacaw();
