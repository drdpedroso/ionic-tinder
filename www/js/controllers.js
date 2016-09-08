angular.module('controllers', [])
  .controller('HomeController', function($scope){
    $scope.persons = [
      {'photo' : 'http://s2.glbimg.com/pXH2qoCQFOGFm6VmCJZvvL68m98=/e.glbimg.com/og/ed/f/original/2016/06/14/untitled-3_1.jpg', 'name' : 'Lilian', 'age': '21'},
      {'photo' : 'http://s2.glbimg.com/pXH2qoCQFOGFm6VmCJZvvL68m98=/e.glbimg.com/og/ed/f/original/2016/06/14/untitled-3_1.jpg', 'name' : 'Larissa', 'age' : '18'}
    ]
  })
