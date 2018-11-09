
angular.module('routerApp').run(function ($rootScope, $location, $state, LoginService) {

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        console.log('Changed state to: ' + toState)
        
        if (toState.authenticated && !LoginService.isAuthenticated()) {
            $state.transitionTo('login');
        }

    })
})
angular.module('routerApp').controller('LoginController', function ($scope, $stateParams, $state, LoginService) {

    $scope.formSubmit = function () {
        if (LoginService.login($scope.username, $scope.password)) {
            $scope.error = '';
            $scope.username = '';
            $scope.password = '';
            $state.transitionTo('home');
        } else {
            $scope.error = "Nom d'usuari/Contrasenya incorrectes !";
        }
    };

})

angular.module('routerApp').factory('LoginService', function () {
    var admin = 'admin';
    var pass = 'pass';
    var isAuthenticated = false;

    return {
        login: function (username, password) {
            isAuthenticated = username === admin && password === pass;
            return isAuthenticated;
        },
        authenticated: function () {
            return isAuthenticated;
        }
    };

})