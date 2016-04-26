(function () {
    'use strict';

    angular.module('fs-angular-color',['mdColorPicker'])
    .directive('fsColor', function($location) {
        return {
            template: '<div md-color-picker ng-model="model" label="{{options.label}}" type="options.type" md-color-default-tab="options.defaultTab" preserve-scope="options.preserveScope" md-color-preview="options.preview" md-color-history="options.history" md-color-material-palette="options.materialPalette" click-outside-to-close="options.clickOutsideToClose"></div>',
            restrict: 'E',
            transclude: true,
            scope: {
               options: "=?fsOptions",
               model: "=?fsModel",
               label: "@fsLabel",
            },

            link: function($scope, element, attrs, ctrl) {
   
                $scope.options = $scope.options || {};
                angular.extend($scope.options,{ label: $scope.label,
                                                preserveScope: true,
                                                clickOutsideToClose: false,
                                                history: false,
                                                materialPalette: false,
                                                type: 0,
                                                defaultTab: 'genericPalette',
                                                preview: true });
            }
        };
    });
})();