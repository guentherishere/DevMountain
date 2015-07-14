// Instructor: Dan
// Topics: Objects in the am, Arrays in the pm

// Users on WebApps: E-mail address, username, name, birthday, gender, country

var user = {
  email: "Whatever their email is.", // email is a 'key', string is 'value pair'
  username: "dckesler",
  name: "Dan"
};

// created object, but realized your object is missing something
// how do you add the new property?

user.isClothed = false; // this is also ex of dot notation
user.favColor = "green"; // another example

user.facColor = "red"; // dot notation
user["favColor"] = "red"; // bracket notation. Everything can be done w. brackets
                          // but not dot notation

var key = "trukey";
user[key] = "alive"; // looks up key and sees what it is equal to, adds trukey to alive
user["key"] // acts like user.key to define something


object.1 = 54; // does not work
user[1] = 54; // will add 54 to the property 1

// looping through an object
for (var key in user){ //will loop through for every object
  console.log(user[key]) //key will be replaced w. the property when it loops
}

// key can be any word
for(var truck in user){ //truck took the place of key. It can be anything like a function
}

var dan = {  //in this example we want to remove undefined stuff
  name: "Daniel",
  color: undefined,
  username: "dckesler",
  hair: undefined
}

for(var key in dan){
  if (dan[key] === undefined) {
    delete dan[key]; //deletes the entire key where it's undefined
  }
}

//---------------------------------------------------------------------//

// Methods - function within an object

dan.sayHi = function(){ //this is a method
  console.log("hi");
}

dan.sayHi(); //how to access the method

//---------------------------------------------------------------------//
// References
dan.funciton = dano // Dan and .funciton is a reference

// Remember dan is our object
var phillipe = dan; // Phillipe and Dan are both references since dan is linked to funciton
phillipe.name = "Phillipe";

var copier = function(obj){
  var newObj = {}; // creating a new spot in memory for this object
  for (var key in obj){
    newObj[key] = obj[key]
  }
  return newObj; // this function would not work of the object contained a ref to another object
}

var phillipe = copier(dan);

//---------------------------------------------------------------------//
//---------------------------------------------------------------------//
//---------------------------------------------------------------------//

//Arrays

var list = [];

 //arrays maintain order where as objects do not
 //use arrays for todo list

var list = [1,2,3,4,5,6];

list = ["dan", "mihir", "dustin", "eric"]

//get acces dustin
list[2] //list value at 2

//array properties (or methods of arrays)
length -- number of elements in an array (Ex: list.length returns 4)

push -- adds to array (Ex: list.push("eric") will add eric to the end of the array)

pop -- removes last element of array (ex: list.pop())

shift -- removes first item of the array (ex: list.shift())

unshift -- adds element to front of array (ex: list.unshift())

split -- **string method** (ex: string.split("") breaks up string ex [Daniel] is now ["D" "a" "n" etc etc]; or if you did string.split("n") it would return ["Da", "iel"]
        then you could do var sentArray = sentence.split(" ") and that will remove all the spaces and assign it to sentArray

join -- **array method** Takes in a join argument returns string of elements separated by argument (ex: sentArray.join("  ")) adds spaces back to the string

splice -- adds/removes items to/from an array, and returns the removed item(s). (Ex: sentArray.splice(4, 1)) removes the fourth element and removes only that one.
          The 4 represents the index, 1 represents how many to take out from that point

slice -- returns the selected elements in an array, as a new array object. References come in to play (Ex: slice(4) or slice (4,2))

reverse -- it just reverses the order of the array [1,2,3] will appear [3,2,1]. This CHANGES the original array. (Ex: newList.reverse())

indexOf -- **string method** list.indexOf("mihir"). This returns the index of that element in the array at its first occurence.

//You can chain methods FYI
newList.slice().reverse()

//ToyProblem
var sentence = "How man times did you drink your toothpaste as a child?"
//Make a function or procedurally reverse this sentence
//answer
sentence.split("").reverse().join("");
