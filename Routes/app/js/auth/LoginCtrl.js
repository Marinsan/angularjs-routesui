app.controller('LoginCtrl', function ($scope, myService, $mdToast, $window) {

    $scope.LoginCheck = function () {
        var User = {
            UserName: $scope.uName,
            Password: $scope.password
        };

        $("#divLoading").show();
        var getData = myService.UserLogin(User);
        getData.then(function (msg) {
            if (msg.data == "0") {
                $mdToast.show(
                  $mdToast.simple()
                   .textContent('Contrasenya incorrecta!')
                  .position('top right')
                  .hideDelay(3000))
                  .then(function () {
                      console.log('Toast dismissed.');
                  }).catch(function () {
                      console.log('Toast failed or was forced to close early by another toast.');
                  });
            }
            else if (msg.data == "-1") {

                   $mdToast.show(
                   $mdToast.simple()
                    .textContent('Usuari incorrecte!')
                   .position('top right')
                   .hideDelay(3000))
                   .then(function () {
                       console.log('Toast dismissed.');
                   }).catch(function () {
                       console.log('Toast failed or was forced to close early by another toast.');
                   });
            }
            else {
             
                $("#divLoading").hide();
                $window.location.href = "/app/index.html#!/home";
            }
        });
    }

    function clearFields() {
        $scope.uName = '';
        $scope.uPwd = '';
    }

});

routerApp.controller('showUserController', function ($scope) {
        
        var User = {
            UserName: $scope.uName,
            Password: $scope.password
        }
    $scope.username = User;
});