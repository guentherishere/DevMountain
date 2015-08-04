app.directive("mgShowTime", function(){
  return {
    restrict: "E",
    template: "<div> {{time}} </div>",
    link: function(scope, element, attrs) {
        var currentTime = new Date();
        scope.time = currentTime.toString();
    }
  }


});
