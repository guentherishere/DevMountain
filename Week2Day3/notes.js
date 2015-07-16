//Callback Notes
//Instructor: AJ

//Wal-mart callbacks are synchronous
//Starbucks callbacks are asynchronus

  //objects, functions, and arrays are all first class citizens
  //functions behave like objects

// <-----------------------------------------------> //
//Wal-mart callback
var lucky = [7, 42, 11, 2, 37];

function plusOne(num) {
  var result = num + 1;
  console.log(result);
  return result;
};

lucky.forEach(plusOne);

    //what he means by wal-mart callback is that it is a batch job.
    //it happens like it happens at wal-mart. You bring your bag and handle each item one by one
    //until you're checked out

//change it a bit so its like creating a receipt

var lucky = [7, 42, 11, 2, 37];
var total = 0;

function sum(num){
  total += num;
}

lucky.forEach(sum);
console.log("the total is:", total);

//
//this function coming up is different because it's performing on forEach
//this function does the exact same thing
//

var lucky = [7, 42, 11, 2, 37];
var total = 0;

function sum(num){
  total += num;
  console.log(num);
  total += num;
};

function forEach(arr, cb) {
  var i;
  var item;

  for (var i = 0; i < arr.length; i+= 1) {
    item = arr[i];
    cb(arr[i]);
  };
};

forEach(lucky, sum);
console.log("total:", total)


// <-----------------------------------------------> //
