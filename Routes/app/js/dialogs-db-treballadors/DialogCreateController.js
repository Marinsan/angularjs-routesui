angular.module('routerApp')

.controller('CreateEmployeeDialogController', function ($scope, $mdDialog, $interval) {
    $scope.status = '  ';
    $scope.customFullscreen = false;

    $scope.showAdvanced_create_taula = function (ev) {
        $mdDialog.show({
            controller: CreateDialogController,
            templateUrl: 'templates/dialogs/dialog-create.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: false,
            fullscreen: $scope.customFullscreen
        })
        .then(function (answer) {
            $scope.status = 'You said the information was "' + answer + '".';
        }, function () {
            $scope.status = 'You cancelled the dialog.';
        });
    };

    function CreateDialogController($scope, $mdDialog) {
        $scope.hide = function () {
            $mdDialog.hide();
        };

        $scope.cancel = function () {
            $mdDialog.cancel();
        };

        $scope.answer = function (answer) {
            $mdDialog.hide(answer);
        };
    }
});