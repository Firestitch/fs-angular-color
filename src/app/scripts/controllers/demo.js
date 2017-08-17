'use strict';


angular.module('app')
  .controller('DemoCtrl', function ($scope,$mdDialog) {


    $scope.color = '';

    $scope.open = function() {
		$mdDialog
        .show({ template: '<fs-color fs-model="color" fs-label="Color"></fs-color>',
                title: 'Attention',
                clickOutsideToClose: true,
                ok: 'Ok',
                controllerAs: 'dialog',
                preserveScope: true,
                skipHide: true,
                multiple: true,
                controller: function($scope) {
                	$scope.open = function() {

                	}
                }
        });
    }
});
