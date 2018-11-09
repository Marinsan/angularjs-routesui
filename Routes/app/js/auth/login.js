(function () {
    'use strict';

    var app = angular.module('routerApp');

    app.controller('LoginController', function ($scope, $rootScope, $stateParams, $state, LoginService) {

        $scope.formSubmit = function () {
            if (LoginService.login($scope.username, $scope.password)) {
                $scope.error = '';
                $scope.username = '';
                $scope.password = '';
                $state.transitionTo('home');
            } else {
                $scope.error = "Nom d'usuari o contrasenya incorrectes !";
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