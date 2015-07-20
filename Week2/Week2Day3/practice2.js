/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem
  //code here for sayHi
   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });

and what you should write is the favNum function that makes the code above work,


   var sayHi = function(str, cb){
    cb(str);
   }
   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });


*/

 //Code Here for first

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

var first = function(array, callback){
    callback(array[0]);
};

first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});






/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




  //Code Here for last

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

var last = function(array, callback){
    var lastIndex = array.length - 1;
    callback(array[lastIndex]);
};

last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */






  //Code Here for multiply

var multiply = function(num1, num2, callback) {
  answer = num1 * num2;
  // return answer;
  callback(answer);
};

multiply(4, 3, function(answer){
  console.log('The answer is ', answer); //should console.log 12
})





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





  //Code Here for contains

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

var contains = function(array, keyword, callback) {
  for (var i = 0; i < array.length; i++) {
    if(array[i] === keyword){
      result = true;
      break;
    }
    else {
        result = false;
    }
  }
  callback(result);
};

contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for uniq

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

var uniq = function(array, callback) {
  var newArr = [];
  for (i = 0; i < array.length; i++){
    match = undefined;
    for (j = 0; j < newArr.length; j++){
      if (array[i] === newArr[j]){
        match = true;
        break;
      }
    }
    if (!match) {
      newArr.push(array[i]);
    }
  }
  console.log(newArr);
  callback(newArr);
};

uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for each

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Matt', 'Blaine', 'Cahlan'];

var each = function(array, callback) {
  for (var i = 0; i < array.length; i++) {
    // var arrIndex = array.indexOf(array[i]);
    // var arrValue = array[i];
    // var newArr = [arrIndex, arrValue];
    // callback(arrIndex, arrValue);
    callback(array[i],i);
  };
};

each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});






/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





 //code here for getUserById

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

var getUserById = function(objArray, param, callback) {
  for (var i = 0; i < objArray.length; i++) {
    if(objArray[i].id === param){
      // console.log(objArray[i].email, objArray[i].name, objArray[i].address);
      callback(objArray[i]);
    }
  }
};

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address);
});
