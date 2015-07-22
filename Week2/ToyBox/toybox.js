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
