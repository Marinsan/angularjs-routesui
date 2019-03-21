angular.module('routerApp').controller('ToastCtrl', function ($scope, $mdToast, $mdDialog) {

    var isDlgOpen;

    $scope.closeToast = function () {
        if (isDlgOpen) return;

        $mdToast
          .hide()
          .then(function () {
              isDlgOpen = false;
          });
    };
})

angular.module('routerApp')

  .controller('LoginController', function ($scope, $state, $rootScope, AuthenticationService, $mdToast, $mdDialog) {

      var vm = this;

      AuthenticationService.ClearCredentials();

      vm.logout = function () {

          $state.transitionTo('login');

      }

      vm.login = function (obj) {
          vm.loginObj = obj;

          AuthenticationService.Login(vm.loginObj.username, vm.loginObj.password, 'admin', 'pass', function (response) {
              if (response.success) {
                  AuthenticationService.SetCredentials(vm.loginObj.username, vm.loginObj.password);
                  console.log("Success");
                  $state.transitionTo('home');
              } else {
                  $mdToast.show({
                      hideDelay: 3000,
                      position: 'top right',
                      controller: 'ToastCtrl',
                      templateUrl: 'templates/dialog-access.html'
                  })
              }
          });
      };

  });