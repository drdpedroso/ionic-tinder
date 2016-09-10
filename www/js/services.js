angular.module('services', [])

.service('UserService', function($http){

  var getPersons = function(){
    return $http.get('http://localhost:9000/api/get_users');
  }

  return {
    getPersons : getPersons
  }

})
