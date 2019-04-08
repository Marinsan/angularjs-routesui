(function () {
    'use strict';

    angular.module('MainApp')

    .controller('LoginControler', ['$rootScope', '$scope', '$state', 'Authentication', 'AvisService', 'PrepareService',
                      function ($rootScope, $scope, $state, Authentication, AvisService, PrepareService) { 

    $rootScope.pantallaDesc = "Login";

    $scope.Model = {};

    PrepareService.getSede()
        .then(function (datos) {
            $scope.sedes = datos;
        });

    $scope.logIn = function (form) {

        if (form.$valid) {
            
            Authentication.logIn($scope.Model)
                .success(function () {

                    
                        $rootScope.user = Authentication.getCurrentUser();
                        $rootScope.sede = Authentication.getCurrentUserSede();
                        $rootScope.auxSedeDescripcion = " - ";
                        //$rootScope.user.user_sedeId
                        //$rootScope.user.sede = $scope.sede;

                        $state.go("Menu", {}, { reload: true });
                        
                }).error(function(error){
                    AvisService.error("El usuario o la contraseñe son incorrectos.");
                });
       }
    }
                 
                              
}])         

.controller('LogoutControler', ['$rootScope', '$scope', 'Authentication', 
                          function ($rootScope, $scope, Authentication) {

}])


})();

 //   