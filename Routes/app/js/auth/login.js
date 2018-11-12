(function () {
    'use strict';

    var app = angular.module('routerApp');

    app.controller('LoginController', function ($scope, $rootScope, $stateParams, $state, LoginService, $mdToast, $mdDialog) {

        $scope.formSubmit = function () {
            if (LoginService.login($scope.username, $scope.password)) {
                $scope.error = '';
                $scope.username = '';
                $scope.password = '';
                $state.transitionTo('home');
            } else {

                    $mdToast.show({
                        hideDelay: 3000,
                        position: 'top right',
                        controller: 'ToastCtrl',
                        templateUrl: 'templates/dialog-access.html'
                    })
            }
        };

    });

    app.controller('ToastCtrl', function ($scope, $mdToast, $mdDialog) {

        var isDlgOpen;

        $scope.closeToast = function() {
            if (isDlgOpen) return;

            $mdToast
              .hide()
              .then(function() {
                  isDlgOpen = false;
              });
        };
    })

    app.factory('LoginService', function () {
        var admin = 'admin';
        var pass = 'pass';
        var isAuthenticated = false;

        return {
            login: function (username, password) {
                isAuthenticated = username === admin && password === pass;
                return isAuthenticated;
            },
            isAuthenticated: function () {
                return isAuthenticated;
            }
        };

    });

})();