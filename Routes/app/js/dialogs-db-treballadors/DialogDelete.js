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
    };

    function DialogControllerDeleteEmploye($scope, $mdDialog) {
        $scope.hide = function () {
            $mdDialog.hide();
        };

        $scope.cancel = function () {
            $mdDialog.cancel();
        };
    }
});