angular.module('controllers', [])
  .controller('HomeController', function($scope, $state, UserService){

    getPersons();

    function getPersons(){
      UserService.getPersons().then(function(response){
        $scope.persons = response.data;
      }).catch(function(err){
        console.log(err);
      })
    }


    $scope.swipeCard = function(person){
      $scope.persons.shift(person);
    }

    $scope.seeDetails = function (person) {
        $state.go('details', {
          person:person
        })
    }

  })

  .controller('DetailsController', function($scope, $stateParams){

      $scope.person = $stateParams.person;

  })
