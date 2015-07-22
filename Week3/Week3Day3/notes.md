REST is a protocol
  -given a certain series of instructions we will give you a result

  The "GET" term is a method
  PUT - putting information out there for REST to do something with it
  POST - use when adding new data
  DELETE - used to delete data

To initiate a REST call in Angular?


//basic call
$http:.get('https://AnyUrlCanGoHere.com/get/AnyData').then(function(response){
  var status = response.status;
  var data = response.data;
  })

https 443 port specification is dependant on the API

$http({
  method: "GET",
  url: 'https://www.blab'
  }).then(function)(response){
    var status = response.status;
    var data = response.data;
  }


  //JavaScript FUNdamentals
    var seven = 7;

    var myFunc = function(getParamFunc){
        return getParamFunc() + 1;
    }

    var getParamFunc = function(){
      return seven;
    }

    var answer =  myFunc(getParamFunc);
    //returns 8

  //another example

  setTimeout(function(){

    }, 5000);

<------------------------------------------------------->

/Angular example
  angular.service('peopleService', ['errorHandler', function(errorHandler)])
    return $http.get('https://www.blah.com/api/AnyPerson' + peopleNum)
      .then(function(response){
          //response: {
                status: 200
                data: {
                    people:{
                      name: 'Awesome'
                      title: 'Mr'
                    }
                }
          }
    -------------------------------------------
        })
        return response.data.people;
      })
    }
  }
}]);

  //on-controller
  peopleService.getAnyPeople(123).then(function(person)){

  });

  //JSON Response

  {
    "people": {
        "name": "Joe"
    }
  }
<------------------------------------------------------->
another way

this.addAnyPeople = function(peopleObject){
  return $http({
      url:'http://blah'
      body: peopleObject,
      method: 'POST'
    }
    );
}
