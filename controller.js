(function() {
  "use strict";
  angular
    .module('addressBook')
    .controller('MainController', function($scope, PeopleService, $location, $routeParams) {
      PeopleService.read().success(function (people) {
        $scope.people = people;
      });

      PeopleService.readOne($routeParams.id).success(function (person) {
        $scope.person = person;
      });

      $scope.deletePerson = function (id) {
        PeopleService.delete(id);
      };

      $scope.createPerson = function (newPerson) {
        PeopleService.create(newPerson);
        $location.path('/people');
      };

      var watchCallBack = function () {
        PeopleService.read().success(function (people) {
          $scope.people = people;
        });
      };

      $scope.$on('person:updated', watchCallback);
      $scope.$on('person:deleted', watchCallback);
      $scope.$on('person:created', watchCallback);

    });


})();
