'use strict';


angular.module('app')
  .controller('DemoCtrl', function ($scope) {


    $scope.color = '';
    
    $scope.submit = function() {
        alert('submit');
    }
});
