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
                        hideDelay: 300,
                        position: 'top right',
                        templateUrl: 'templates/dialog-access.html'
                    })
            }
        };

    });

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