angular.module('routerApp')
	.factory('AuthenticationService', ['$http', '$cookieStore', '$rootScope', '$timeout',
		function ($http, $cookieStore, $rootScope, $timeout) {
		    var service = {};

		    service.Login = function (username, password, fetchedUsername, fetchedPassword, callback) {
		        var response = { success: username === fetchedUsername && password === fetchedPassword };
		        if (!response.success) {
		            response.error = "Nom d'usuari o contrasenya incorrectes";
		        }
		        callback(response);
		    };

		    service.SetCredentials = function (username, password) {
		        var authdata = username + ":" + password;

		        $rootScope.globals = {
		            currentUser: {
		                username: username,
		                authdata: authdata
		            }
		        };

		        $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;
		        $cookieStore.put('globals', $rootScope.globals);
		    };

		    service.ClearCredentials = function () {
		        $rootScope.globals = {};
		        $cookieStore.remove('globals');
		        $http.defaults.headers.common['Authorization'] = 'Basic ';
		    };

		    return service;

		}]);