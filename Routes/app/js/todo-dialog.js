﻿angular.module('routerApp')

.controller('deleteDialog', function ($scope, $mdDialog) {
    $scope.status = '  ';
    $scope.customFullscreen = false;

        $scope.showAdvanced = function(ev) {
            $mdDialog.show({
                controller: DialogController,
                templateUrl: 'templates/dialog-todo.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:false,
                fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            })
            .then(function(answer) {
                $scope.status = 'You said the information was "' + answer + '".';
            }, function() {
                $scope.status = 'You cancelled the dialog.';
            });
        };


    function DialogController($scope, $mdDialog) {
        $scope.hide = function () {
            $mdDialog.hide();
        };

        $scope.cancel = function () {
            $mdDialog.cancel();
        };

        $scope.destroy = function () {
            $mdDialog.destroy('t');
        }

        $scope.answer = function (answer) {
            $mdDialog.hide(answer);
        };
    }
});