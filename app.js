(function() {
  "use strict";
  angular
    .module('addressBook', [
      'ngRoute'
    ])

    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainController'
        })
        .when('/people', {
          templateUrl: 'views/people.html',
          controller: 'MainController'
        })
        .when('/new', {
          templateUrl: 'views/createPerson.html',
          controller: 'MainController'
        })
        .when('/person', {
          templateUrl: 'views/singlePerson.html',
          controller: 'MainController'
        })

        .when('/404', {
          template: '<h1>Oh Sorry, page not found</h1>'
        })
        .otherwise({
          redirectTo: '/404'
        });

    });
})();
