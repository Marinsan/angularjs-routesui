angular.module('routerApp')

.factory('ServeiTelefons', ['$http', '$q', 'SERVER_API_URL', function ($http, $q, SERVER_API_URL) {


    var _getPhones = function () {

        var defered = $q.defer();
        var promise = defered.promise;

        $http({
            method: 'GET',
            url: SERVER_API_URL + '/api/phones',
            cache: true

        }).then(function successCallback(response) {

            defered.resolve(response.data);

        }, function errorCallback(response) {
            defered.reject(response);
        });

        return promise;

    };

    var _getPhone = function (idPhone) {

        var defered = $q.defer();
        var promise = defered.promise;

        $http({
            method: 'GET',
            url: SERVER_API_URL + '/api/phones/' + idPhone,
            cache: true


        }).then(function successCallback(response) {

            defered.resolve(response.data);

        }, function errorCallback(response) {
            defered.reject(response);
        });

        return promise;

    };

    //var _updatePhone = function (phone) {

    //    var defered = $q.defer();
    //    var promise = defered.promise;

    //    $http({
    //        method: 'PUT',
    //        url: SERVER_API_URL + '/api/phones/',
    //        data: phone

    //    }).then(function successCallback(response) {

    //        defered.resolve(response.data);

    //    }, function errorCallback(response) {
    //        defered.reject(response);
    //    });

    //    return promise;

    //};

    //var _createPhone = function (phone) {

    //    var defered = $q.defer();
    //    var promise = defered.promise;

    //    $http({
    //        method: 'POST',
    //        url: SERVER_API_URL + '/api/phones/',
    //        data: phone

    //    }).then(function successCallback(response) {

    //        defered.resolve(response.data);

    //    }, function errorCallback(response) {
    //        defered.reject(response);
    //    });

    //    return promise;

    //};

    return {

        getPhones: function () {

            var defered = $q.defer();
            var promise = defered.promise;

            _getPhones().then(function (phoneFromApi) {
                //Succes
                defered.resolve(phoneFromApi);
            }, function (error) {
                // Error
            });

            return promise;
        },

        getPhone: function (idPhone) {

            var defered = $q.defer();
            var promise = defered.promise;

            _getPhone(idPhone).then(function (phoneFromApi) {
                //Succes
                defered.resolve(phoneFromApi);
            }, function (error) {
                //Error
            });

            return promise;
        },

    //    updatePhone: function (phone) {

    //        var defered = $q.defer();
    //        var promise = defered.promise;

    //        _updatePhone(phone).then(function (phoneFromApi) {
    //            //Succes
    //            defered.resolve(phoneFromApi);
    //        }, function (error) {
    //            //Error
    //        });

    //        return promise;
    //    },

    //    createPhone: function (phone) {

    //        var defered = $q.defer();
    //        var promise = defered.promise;

    //        _createPhone(phone).then(function (phoneFromApi) {
    //            //Succes
    //            defered.resolve(phoneFromApi);
    //        }, function (error) {
    //            //Error
    //        });

    //        return promise;
    //    },
    }

}]);
