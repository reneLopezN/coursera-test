//IIFE
(function() {
  'use strict';

  angular.module('myFirstApp',[])

  .controller('myFirstController',function ($scope) {
    $scope.name = 'Ginita';
    $scope.sayHello = function (){
      return 'HELLO';
    };
  });


})();
