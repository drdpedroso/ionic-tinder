angular.module('services', [])

.service('UserService', function($http){

  var getPersons = function(){
    return $http.get('https://pucc-api.herokuapp.com/api/get_persons');
  }

  return {
    getPersons : getPersons
  }

})
