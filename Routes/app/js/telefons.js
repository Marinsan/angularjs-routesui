angular.module('routerApp').service('TelefonsService', function ($http) {
    //**********----Get All Record----***************  
    var urlGet = '';
    this.getAll = function (apiRoute) {
        urlGet = apiRoute;
        return $http.get(urlGet);
    }
});
angular.module('routerApp').controller('TelefonsController', ['$scope', 'TelefonsService',
    // we inject StudentService  inject becuse we call getAll method for get all student  
function ($scope, TelefonsService) {
    // this is base url   
    var baseUrl = '/taulaTelefons/'; 
    $scope.getTelefons = function () {
        var apiRoute = baseUrl;
        var _telefon = TelefonsService.getAll(apiRoute);
        _telefon.then(function (response) {
            $scope.telefons = response.data;
        },
        function (error) {
            console.log("Error: " + error);
        });

    }
    $scope.getTelefons();

}]);