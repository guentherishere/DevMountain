//take the first name from the array and combine with the
//lastName of the array

firstNames = ["Jason", "Dan", "Cahlan"];
lastNames = ["Turner", "Kesler", "Sharp"];

var combinator = function(array1, array2){
    var fullName = [];
    for(var i = 0; i < array1.length; i++){
        fullName[i] = array1[i] + " " + array2[i];
    }
return fullName;
}

combinator(firstNames, lastNames);


//toybox problem. Replace all odd values w. the letter 'o'
array = [1,2,3,4,5,6,7,8,9];

var replacer = function(array) {
    for(var i = 0; i < array.length; i++)
        if(array[i] % 2 !== 0){
            array[i] = 'O';
        }
    return array;
};

replacer(array);

    //alternet soln
    var findOdds = function(array){
      var results = array.map(function(elem) {
        return elem % 2 !== 0 ? "O" : elem;
      })
      return results;
    };

//write a function that takes in a number and returns the factorial of that number
//ex: factorial(5) returns 120 because 5 * 4 * 3 * 2 * 1 === 120
function factorial(number) {
    if (number <= 1)
    return 1;
    return number * factorial(number-1);
}

factorial(10);

//or

function factorial(num){
  if (num === 0) {
    return 1
  }
  else {
    return num * factorial(num-1)
  }
}

//Write a function called simpleSymbols that takes in a
//string parameter and determines if it is an acceptable
//sequence by either returning the string true or false.
//The str parameter will be composed of + and = symbols
//with several letters between (ie. ++d+===+c++==a) and
//for the string to be true each letter must be surrounded
//by a + symbol. So the string to the left would be false.
//The string will not be empty and will have at least one
//letter.

//**couldn't figure this one out

var simpleSymbols = function(str){
    var i;
    for(i = 0; i < str.length; i++){
        if(str[i] !== "+" && str[i] !== "="){
            if(str[i - 1] !== '+' || str[i + 1] !== '+'){
                return false;
            }
        }
    }
    return true;
};

simpleSymbols("===+a+==+b+=");






//given an arbitrary input string, return the first non-repeated character in
//the string. For example:

var noRepeat = function(string){
  var stringArray = string.split('');
  for (var i = 0; i < stringArray.length; i++){
    if(stringArray.lastIndexOf(stringArray[i]) === i) {
      return stringArray[i];
    }
  }
};

noRepeat("AABCABD");






// Write a function called ABCheck that takes a string parameter and return
//true if the characters a and b are separated by exactly 3 places anywhere
//in the string at least once (ie. "lane borrowed" would result in true because
//there is exactly three characters between a and b). Otherwise return false.

var ABCheck = function(str) {
    var arr = str.split(" ").join("");
    console.log(arr);
    for(var i = 0; i < arr.length;i++){
        if(arr[i] === "a"){
            if(arr[i+3] === "b"){
                            return true;
            }
        }
    }
    return false;
};

console.log(ABCheck('lane borrowed')); // true

//Hidden testcases:
// console.log(ABCheck(xxxxxx)); // false
// console.log(ABCheck(xxxxxx)); // false
// console.log(ABCheck(xxxxxx)); // false
// console.log(ABCheck(xxxxxx)); // true
// console.log(ABCheck(xxxxxx)); // true





// Write a function that generates an array of integers of the Fibonacci sequence, up to i = 100. The Fibonacci sequence is defined by: Fn = Fn-1 + Fn-2, which means to find Fn you add the previous two numbers up. The first two numbers in the sequence are 0 and 1. Write a function to check if a given number is in the Fibonacci sequence, return "yes" if it is, if not return the string "no."

//couldn't figure this one out

var fib = function() {
    var fibArray = [0, 1];
    for (var i = 2; i < 100; i++) {
        fibArray[i] = fibArray[i-1] + fibArray[i-2];
    }
    return fibArray;
};

var fibTest = function(testNum) {
    if (fib().indexOf(testNum) !== -1) {
        return 'yes';
    } else {
        return 'no';
    }
};

console.log(fib()[99])
fibTest(13);




//   FIZZ BUZZ   //

/*Write a function that console logs every number from 1 to 100.
If the number is divisible by 3, console log "Fizz" instead of the number.
If the number is divisible by 5, console log "Buzz" instead of the number.
If the number is divisible by 15, console log "FizzBuzz" instead of the number.*/

// Example //

/*
1
2
"Fizz"
4
"Buzz"
"Fizz"
7
8
"Fizz"
"Buzz"
11
"Fizz"
13
14
"FizzBuzz"
etc...
*/

/* CHALLENGE:  Complete this problem WITHOUT Googling "Fizz Buzz". See how few characters you can
use to complete the exercise. */

for (var i=1; i <= 100; i++)
{
    if (i % 15 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}


// Write a function that accepts a number, n, and returns the nth Fibonacci number. Use a recursive solution to this problem; if you finish with time left over, implement an iterative solution.
//  * nthFibonacci(2); // => 1
//  * nthFibonacci(3); // => 2
//  * nthFibonacci(4); // => 3
//  * nthFibonacci(5); // => 5
//  * nthFibonacci(6); // => 8
//  * nthFibonacci(7); // => 13

//Fibonacci Sequence: 1, 1, 2, 3, 5, 8, 13, 21, 34

var fibonacciLives = function(number){
    var array = [0, 1];
    for(i = 2; i < 100; i++){
        array[i] = array[i-1] + array[i-2]
    }
    console.log(array[number]);
}

fibonacciLives(2);
fibonacciLives(3);
fibonacciLives(4);
fibonacciLives(5);
fibonacciLives(6);
fibonacciLives(7);

//recursive solution
var fibCheck = function(n) {
    if (n < 3) {
        return 1;
    } else {
        return fibCheck(n - 2) + fibCheck(n - 1);
    }
};

console.log(fibCheck(7));
