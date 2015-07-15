//new binding
var Animal = function(color, name, type) {
  //this = {}
  this.color = color;
  this.name = name;
  this.type = type;
}

var zebra = new Animal('black and white', 'Zorro', 'Zebra');

// window Binding
var sayAge = function() {
  consol.log(this.age);
}

var me = {
  age: 25
};

sayAge(); //undefined becuase if you invoke func w. no
windows.age = 35;
sayAge();


// The "This" Statement
// AJ instructor; has no idea where we are in the course; confusing

always start js files w. 'use strict';

var people = [
    {name: 'AJ' ,
    age: 29
  }
  ,
  {
    name: 'Adeline' ,
    age: 25
  }
];

//create reference to AJ object
var aj = people[0];

function isOver25(person) {
  if (person.age > 25) {
    return true;
  }
  return false;
};

isOver25(aj); //this prints out true

//bind, call, apply; look these up

var getAjsAge = getAge.bind(aj);
console.log(getAjsAge());


//ex
var skills = ['Programmer', 'DJ', 'Mathmagician'];
function showSkillz(skillA, skillB) {
  var person = this;
  console.log (person has skillz blah blah);
}

var showAjsSkillz = showSkillzbind(aj);
showAjsSkillz('Bat', 'Rabbit');
//returns bat rabbit for skillz

show skillz.apply(aj, skills);
//will pass AJ and will also pass every array for skills

//bind is a long term use; call and apply are more short term

//implicit binding = ex aj.isOver(25) it will look to the left of the '.' and bind to it
//explicity binding = returns new function ex: showSkillz.bind(context)
//call is explicit = executes immeidate w. parameters ex: function.call(context, array[0], array[1]);
//apply is explicit = executes decomposes/expands array function
