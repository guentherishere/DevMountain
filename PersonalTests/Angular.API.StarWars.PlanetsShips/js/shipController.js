app.controller('shipCtrl', function($scope, shipService) {

  var getParseData = function() {
    shipService.getShip().then(function(response) {
      console.log('response: ', response);

      for (var i = 0; i < response.length; i++) {
        if (response[i].length === "0") {
          response[i].length = 1
        }
        if (response[i].cost_in_credits === "unknown" || response[i].cost_in_credits === "0") {
          response[i].cost_in_credits = 1
        }
        if (response[i].passengers === "unknown" || response[i].passengers === "0") {
          response[i].passengers = 1;
        }
        if (response[i].cargo_capacity === "0") {
          response[i].cargo_capacity = 1;
        }
        if (response[i].length === "19,000") {
          response[i].length = 19000;
        }

        if (response[i].name === "Sentinel-class landing craft") {
          response[i]['img'] = './images/ships/Sentinel.png';
        } else if (response[i].name === "Death Star") {
          response[i]['img'] = './images/ships/DeathStar.jpg';
        } else if (response[i].name === "Millennium Falcon") {
          response[i]['img'] = './images/ships/Millennium.png';
        } else if (response[i].name === "Y-wing") {
          response[i]['img'] = './images/ships/Ywing.jpg';
        } else if (response[i].name === "X-wing") {
          response[i]['img'] = './images/ships/Xwing.jpg';
        } else if (response[i].name === "TIE Advanced x1") {
          response[i]['img'] = './images/ships/Tie.jpg';
        } else if (response[i].name === "Executor") {
          response[i]['img'] = './images/ships/Executor.jpg';
        } else if (response[i].name === "Slave 1") {
          response[i]['img'] = './images/ships/Slave1.jpg';
        } else if (response[i].name === "Imperial shuttle") {
          response[i]['img'] = './images/ships/Imperial.jpg';
        } else if (response[i].name === "EF76 Nebulon-B escort frigate") {
          response[i]['img'] = './images/ships/Escort.jpg';
        } else {
          response[i]['img'] = './images/ships/NotFound.jpg';
        };

        var data = [response[i].length / 1, response[i].crew / 1, response[i].cost_in_credits / 10000, response[i].passengers / 1, response[i].cargo_capacity / 10000];

        response[i].nestArray = data;
      }
      $scope.shipStats = response;
      $scope.shipStatsArray = [response[0].nestArray];

    });
  }
  getParseData();

  //Angular Chart Plugin
  $scope.labels = ["Length", "Cost(x10,000)", "Crew", "Passengers", "Cargo(x10,000)", "MGLT"];
});
