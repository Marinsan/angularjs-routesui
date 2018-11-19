angular.module('routerApp')

.controller('DialogEmployeeDeleteController', function ($scope, $mdDialog, $interval) {

    $scope.showAdvanced_delete_taula = function (ev) {
        $mdDialog.show({
            controller: DialogControllerDeleteEmploye,
            templateUrl: 'templates/dialogs/dialog-delete.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true
        })
        .then(function (answer) {
            $scope.status = 'You said the information was "' + answer + '".';
        }, function () {
            $scope.status = 'You cancelled the dialog.';
        });
    };

    function DialogControllerDeleteEmploye($scope, $mdDialog) {
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