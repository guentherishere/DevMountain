//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
      //to reuse functions for multiple contexts

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      //implicit binding = ex aj.isOver(25) it will look to the left of the '.' and bind to it
      //explicity binding = returns new function ex: showSkillz.bind(context)
      //call is explicit = executes immeidate w. parameters ex: function.call(context, array[0], array[1]);
      //apply is explicit = executes decomposes/expands array function

      // implicit binding
      // explicit binding
      // new binding
      // window binding

  // 3) What is the difference between call and apply?

      //Answer
      //Apply uses the second argument as an array that is subsequentally unpacked and
      //passed through the function with the contents of the array being the arguments
      //The call function has issues when the number of arguments is unknown. Apply expects
      //the array as the second argument
      //From Stack OF: The difference is that apply lets you invoke the function with
      //arguments as an array; call requires the parameters be listed explicitly.


  // 4) What does .bind do?

      //Answer
      //bind allows you to attach a function to an object

  // 5) this.sayName = implicit binding example
      // sayName.call = explicitly defined; hint is the .call on the right side of it

//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property.
  //*Don't use 'user' instead use the 'this' keyword*

    //Code Here
  var user = {
    username: "batman",
    email: "batman@gothamcity.com";
    getUsername: function() {
      return this.username;
    }
  };

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

user.getUsername();

//Next Problem



// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here

var Car = function(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.move = 0;
};

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

Car.prototype.moveCar = function(){
  this.move = this.move + 10;
  return this.move
};

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments prius' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is
//being returned from the Car function. You'll also need to use the 'this' keyword properly
//in order to make sure you're invoking moveCar on the write object (prius vs mustang).

//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the
//proper syntax that will allow for you to call the getYear function with the prius then the mustang
//objects being the focal objects. *Don't add getYear as a property on both objects*.

  //Code Here
getYear.bind(prius)();
getYear.bind(mustang)();

//New Problem

var user = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getUsername = function(){
  console.log(this.username);
};

setTimeout(getUsername, 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?

  //Answer Here
  //undefined? this is not pointing to anything

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here
  //Bound to the window

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.
setTimeout((getUsername.user), 5000);
