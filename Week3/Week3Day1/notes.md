Topic: Angular
Instructor: Jeremy

DOM - Staging area

Angular - Uses MVC (Model View Controller), which is a design pattern
        - Metaphor: Model Airplane, it's a small replication of something big (thing)
                    View, HTML/CSS (thing)
                    Controller, (does something)
          Flow: view -> controller -> model
          everything is separated so the code isn't in the same place.

Ember is apple's, angular is googles, react is facebook's (read-only)

Reasons for splitting up files:
  -separation of concerns
  -smaller files (easier communications and readability)
  -collaboration (users working on diff files, not the same one)

Entry-point is the MODULE - AKA the Boss
Now you have to give him the workers so they have things to do

                      Module - Boss
                         |
                      Config
                    /         \
                View - $scope - Controller -> Services/Factories
                  |
              Directive  

Directives help you get the view
there is no way for the view to get to the controller based on the flow, so $scope is what
the view and controller use to talk to each

Video - Turbo mode
  SPA Framework - Single Page Application
  Directives, Filters, and DataBinding
    Directives - they teach HTML new trick
                <html ng-app>
                </html>

  name: <input type="text" ng-model="name">/ {{ name }}

  ng-mode="name" is two-way data binding. {{ name }} = one-way data binding, used if the user is not going to change this value a bunch

data-ng-init -> it initializes data-ng-init

ex: <div class="container" data-bg-init="names['Dave', 'Napur', 'Heedy', 'Shriva']">
then later on
<ul>
  <li data-ng-repeat="name in names"> {{ name }}</li>
</ul>

filter example
{{ cust.name | uppercase }}
  -uppercase is the filter. Check docs for more
  -<li data-ng-repeat"cust in customers | filter: nameText | orderBy: 'name'">
      {{ cust.name }} - {{ cust.city }}</li>

Views, Controllers, and scope
  Don't use jQuery in a controller
  <script>
    function SimpleController($scope) {
      $scope.customers [
        {name: 'Dave Jones', city: 'Phoenix'},
        {name: 'Jamie Riley', city: 'Atlanta'},
        {name: 'Heedy Wahlin', city: 'Chandler'},
        {name: 'Thomas Winter', city: 'Seattle'}
      ];
    }
  </script>

a controller is simply a function
