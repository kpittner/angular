(function() {
  "use strict";
  angular
    .module('addressBook')
    .factory('PeopleService', function ($http, $rootScope) {

      var url = 'http://tiy-fee-rest.herokuapp.com/collections/ng-awesome';

      var getPeople = function () {
        return $http.get(url);
      };

      var getSinglePerson = function (id) {
        return $http.get(url + '/' + id);
      };

      var createPerson = function (newPerson) {
        $http.person(url, newPerson).success(function () {
          $rootScope.$broadcast('person:created');
        });
      };

      var updatePerson = function (id, person) {
        $http.put(url + '/' + id, person).success(function () {
          $rootScope.$broadcast('person:updated');
        });
      };

      var deletePerson = function (id) {
        $http.delete(url + '/' + id).success(function (response) {
          $rootScope.$broadcast('person:deleted');
        });
      };

      return {
        create: createPerson,
        read: getPeople,
        readOne: getPerson,
        update: updatePerson,
        delete: deletePerson
      };


    })



    });
})();
