var app = angular.module("App", []);

app.controller("theController", function ($scope, $q, $timeout) {

  $scope.messages = [];

  // Fake http method
  $scope.ajaxMethod = function (delay) {
    var deferMaster = $q.defer();

    $timeout(function () {

      deferMaster.resolve(delay)

    }, delay);  
    return deferMaster.promise

  };


  // $q TEST HERE

  var promise1 = $scope.ajaxMethod(200),
      promise2 = $scope.ajaxMethod(400),
      promise3 = $scope.ajaxMethod(1200);

  promise1.then(function () {

    $scope.messages.push("promise1 is done!");

  });

  promise2.then(function () {

    $scope.messages.push("promise2 is done!");

  });

  promise3.then(function () {

    $scope.messages.push("promise3 is done!");

  });  


  // æ‰€æœ‰ajaxMethodå®Œæˆå¾Œå‘¼å«
  $q.all([promise1, promise2, promise3]).then(function (eachValue) {

    $scope.messages.push("all is done!");
    $scope.messages.push(eachValue);

  });


});


<---------------------------------------------------------------------->
Next Example
<---------------------------------------------------------------------->
function TodoCtrl($scope, $q, $timeout) {
    function createPromise(name, timeout, willSucceed) {
        $scope[name] = 'Running';
        var deferred = $q.defer();
        $timeout(function() {
            if (willSucceed) {
                $scope[name] = 'Completed';
                deferred.resolve(name);
            } else {
                $scope[name] = 'Failed';
                deferred.reject(name);
            }
        }, timeout * 1000);
        return deferred.promise;
    }

    // Create 5 promises
    var promises = [];
    var names = [];
    for (var i = 1; i <= 5; i++) {
        var willSucceed = true;
        if (i == 2) willSucceed = false;
        promises.push(createPromise('Promise' + i, i, willSucceed));
    }

    // Wait for all promises
    $scope.Status1 = 'Waiting';
    $scope.Status2 = 'Waiting';
    $q.all(promises).then(
        function() {
            $scope.Status1 = 'Done';
        },
        function() {
            $scope.Status1 = 'Failed';
        }
    ).finally(function() {
        $scope.Status2 = 'Done waiting';
    });
}
