angular.module('controllers', [])
  .controller('HomeController', function($scope, $state){
    $scope.persons = [
      {'photo' : 'http://s2.glbimg.com/pXH2qoCQFOGFm6VmCJZvvL68m98=/e.glbimg.com/og/ed/f/original/2016/06/14/untitled-3_1.jpg', 'name' : 'Lilian', 'age': '21'},
      {'photo' : 'http://s2.glbimg.com/eSWSdBeYTNdjxJYSX3YQ5IVm12A=/s.glbimg.com/et/gs/f/original/2015/10/23/gabee2.jpg', 'name' : 'Larissa', 'age' : '18'}
    ]

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
