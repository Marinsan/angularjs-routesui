routerApp.controller('MapController', function (NgMap, $scope) {

    $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyDdODNe1AA9oMtDYH9EF47HBkmdoAGa_v8";

    NgMap.getMap().then(function (map) {
        console.log(map.getCenter());
        console.log('markers', map.markers);
        console.log('shapes', map.shapes);

    });
});