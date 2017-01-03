var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
$scope.flower = [
  {name:'rose', src:'pics/rose.png'},
  {name:'lily', src:'pics/lily.png'},
  {name:'sunflower', src:'pics/sunflower.png'}
];
$scope.message="hello!!";
});
