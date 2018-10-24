// app.js
var routerApp = angular.module('routerApp', ['ui.router', 'core', 'validationApp', 'ngAnimate', 'ngMaterial', 'ngMessages']);

routerApp.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
    
    $urlRouterProvider.
      // HOME STATES AND NESTED VIEWS ========================================
   

      // nested list with custom controller
    
        .state('phone', {
            url: '/phone',
            views: {
                
                "": {
                    templateUrl: 'templates/phones/partial-phone.html'
                },

                'Phones@phone':
                {
                    templateUrl: 'templates/phone-list/partial-phone-list.html',
                    controller: 'PhoneController'
                },
                
                'Details@phone': {
                    
                    templateUrl: 'templates/phone-detail/partial-phone-detail.html',
                    controller: 'DetailController'
                }
            },
            params: {
                telefonSeleccionat: {}
            }
        })

    
    .state('form', {
        url: '/form',
        templateUrl: 'templates/forms/partial-form.html',
    })

    .state('formng', {
        url: '/formNgMessages',
        templateUrl: 'templates/forms/partial-form-ngmessages.html',
    })
    .state('formMaterial', {
        url: '/formMaterial',
        templateUrl: 'templates/forms/partial-form-material.html',
    })
    .state('help', {
        url: '/help',
        templateUrl: 'templates/help.html',
    })
    .state('home', {
        url: '/home',
        templateUrl: 'templates/home.html',
    })
     .state('contact', {
         url: '/contact',
         templateUrl: 'templates/contact.html',
     })

});

// Coontrolador llista telefons

routerApp.controller('PhoneController', function($scope, $stateParams) {
    $scope.phones = [
{
    "age": 0,
    "id": "motorola-xoom-with-wi-fi",
    "imageUrl": "img/phones/motorola-xoom-with-wi-fi.0.jpg",
    "name": "Motorola XOOM\u2122 with Wi-Fi",
    "snippet": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb).",
    "additionalFeatures": "Sensors: proximity, ambient light, barometer, gyroscope",
    "android": {
        "os": "Android 3.0",
        "ui": "Honeycomb"
    },
    "availability": [
        ""
    ],
    "battery": {
        "standbyTime": "336 hours",
        "talkTime": "24 hours",
        "type": "Other ( mAH)"
    },
    "camera": {
        "features": [
            "Flash",
            "Video"
        ],
        "primary": "5.0 megapixels"
    },
    "connectivity": {
        "bluetooth": "Bluetooth 2.1",
        "cell": "",
        "gps": true,
        "infrared": false,
        "wifi": "802.11 b/g/n"
    },
    "description": "Motorola XOOM with Wi-Fi has a super-powerful dual-core processor and Android\u2122 3.0 (Honeycomb) \u2014 the Android platform designed specifically for tablets. With its 10.1-inch HD widescreen display, you\u2019ll enjoy HD video in a thin, light, powerful and upgradeable tablet.",
    "display": {
        "screenResolution": "WXGA (1200 x 800)",
        "screenSize": "10.1 inches",
        "touchScreen": true
    },
    "hardware": {
        "accelerometer": true,
        "audioJack": "3.5mm",
        "cpu": "1 GHz Dual Core Tegra 2",
        "fmRadio": false,
        "physicalKeyboard": false,
        "usb": "USB 2.0"
    },
    "id": "motorola-xoom-with-wi-fi",
    "images": [
        "img/phones/motorola-xoom-with-wi-fi.0.jpg",
        "img/phones/motorola-xoom-with-wi-fi.1.jpg",
        "img/phones/motorola-xoom-with-wi-fi.2.jpg",
        "img/phones/motorola-xoom-with-wi-fi.3.jpg",
        "img/phones/motorola-xoom-with-wi-fi.4.jpg",
        "img/phones/motorola-xoom-with-wi-fi.5.jpg"
    ],
    "name": "Motorola XOOM\u2122 with Wi-Fi",
    "sizeAndWeight": {
        "dimensions": [
            "249.1 mm (w)",
            "167.8 mm (h)",
            "12.9 mm (d)"
        ],
        "weight": "708.0 grams"
    },
    "storage": {
        "flash": "32000MB",
        "ram": "1000MB"
    }
},
{
    "age": 1,
    "id": "motorola-xoom",
    "imageUrl": "img/phones/motorola-xoom.0.jpg",
    "name": "MOTOROLA XOOM\u2122",
    "snippet": "The Next, Next Generation\n\nExperience the future with MOTOROLA XOOM, the world's first tablet powered by Android 3.0 (Honeycomb).",
    "additionalFeatures": "Front-facing camera. Sensors: proximity, ambient light, barometer, gyroscope.",
    "android": {
        "os": "Android 3.0",
        "ui": "Android"
    },
    "availability": [
        "Verizon"
    ],
    "battery": {
        "standbyTime": "336 hours",
        "talkTime": "24 hours",
        "type": "Other (3250 mAH)"
    },
    "camera": {
        "features": [
            "Flash",
            "Video"
        ],
        "primary": "5.0 megapixels"
    },
    "connectivity": {
        "bluetooth": "Bluetooth 2.1",
        "cell": "CDMA 800 /1900 LTE 700, Rx diversity in all bands",
        "gps": true,
        "infrared": false,
        "wifi": "802.11 a/b/g/n"
    },
    "description": "MOTOROLA XOOM has a super-powerful dual-core processor and Android\u2122 3.0 (Honeycomb) \u2014 the Android platform designed specifically for tablets. With its 10.1-inch HD widescreen display, you\u2019ll enjoy HD video in a thin, light, powerful and upgradeable tablet.",
    "display": {
        "screenResolution": "WXGA (1200 x 800)",
        "screenSize": "10.1 inches",
        "touchScreen": true
    },
    "hardware": {
        "accelerometer": true,
        "audioJack": "3.5mm",
        "cpu": "1 GHz Dual Core Tegra 2",
        "fmRadio": false,
        "physicalKeyboard": false,
        "usb": "USB 2.0"
    },
    "id": "motorola-xoom",
    "images": [
        "img/phones/motorola-xoom.0.jpg",
        "img/phones/motorola-xoom.1.jpg",
        "img/phones/motorola-xoom.2.jpg"
    ],
    "name": "MOTOROLA XOOM\u2122",
    "sizeAndWeight": {
        "dimensions": [
            "249.0 mm (w)",
            "168.0 mm (h)",
            "12.7 mm (d)"
        ],
        "weight": "726.0 grams"
    },
    "storage": {
        "flash": "32000MB",
        "ram": "1000MB"
    }
},
{
    "age": 2,
    "carrier": "AT&T",
    "id": "motorola-atrix-4g",
    "imageUrl": "img/phones/motorola-atrix-4g.0.jpg",
    "name": "MOTOROLA ATRIX\u2122 4G",
    "snippet": "MOTOROLA ATRIX 4G the world's most powerful smartphone.",
    "additionalFeatures": "",
    "android": {
        "os": "Android 2.2",
        "ui": "MOTOBLUR"
    },
    "availability": [
        "AT&T"
    ],
    "battery": {
        "standbyTime": "400 hours",
        "talkTime": "5 hours",
        "type": "Lithium Ion (Li-Ion) (1930 mAH)"
    },
    "camera": {
        "features": [
            ""
        ],
        "primary": ""
    },
    "connectivity": {
        "bluetooth": "Bluetooth 2.1",
        "cell": "WCDMA 850/1900/2100, GSM 850/900/1800/1900, HSDPA 14Mbps (Category 10) Edge Class 12, GPRS Class 12, eCompass, AGPS",
        "gps": true,
        "infrared": false,
        "wifi": "802.11 a/b/g/n"
    },
    "description": "MOTOROLA ATRIX 4G gives you dual-core processing power and the revolutionary webtop application. With webtop and a compatible Motorola docking station, sold separately, you can surf the Internet with a full Firefox browser, create and edit docs, or access multimedia on a large screen almost anywhere.",
    "display": {
        "screenResolution": "QHD (960 x 540)",
        "screenSize": "4.0 inches",
        "touchScreen": true
    },
    "hardware": {
        "accelerometer": true,
        "audioJack": "3.5mm",
        "cpu": "1 GHz Dual Core",
        "fmRadio": false,
        "physicalKeyboard": false,
        "usb": "USB 2.0"
    },
    "id": "motorola-atrix-4g",
    "images": [
        "img/phones/motorola-atrix-4g.0.jpg",
        "img/phones/motorola-atrix-4g.1.jpg",
        "img/phones/motorola-atrix-4g.2.jpg",
        "img/phones/motorola-atrix-4g.3.jpg"
    ],
    "name": "MOTOROLA ATRIX\u2122 4G",
    "sizeAndWeight": {
        "dimensions": [
            "63.5 mm (w)",
            "117.75 mm (h)",
            "10.95 mm (d)"
        ],
        "weight": "135.0 grams"
    },
    "storage": {
        "flash": "",
        "ram": ""
    }
}
    ]
    ;
    $scope.orderProp = 'age';
    $scope.phone = $stateParams.telefonSeleccionat;
    
})

// Controlador vista detalls telefons 

routerApp.controller('DetailController', function ($stateParams, $scope) {

    $scope.phone = $stateParams.telefonSeleccionat;
})

// Variable + Controllador per a la validacio del formulari partial-form.html

var validationApp = angular.module('validationApp', []);


validationApp.controller('mainController', function ($scope) {
           
    $scope.submitForm = function (isValid) {

        if (isValid) {
            alert('our form is amazing');
        }

    };

});

// Controlador Formulari Material simple partial-form-material.html

routerApp.controller('FormController', function ($scope) {
      $scope.user = {
            name: 'Cristian Marin',
            email: '',
            phone: ''
       };
});

// Controlador NavBar antic
routerApp.controller('NavController', function ($scope) {
    $scope.currentNavItem = 'page1';

});

// Controlador NavBar actual 

routerApp.controller('NavController2', function ($scope) {

    this.topDirections = ['left', 'up'];
    this.bottomDirections = ['down', 'right'];

    this.isOpen = false;

    this.availableModes = ['md-fling', 'md-scale'];
    this.selectedMode = 'md-fling';

    this.availableDirections = ['up', 'down', 'left', 'right'];
    this.selectedDirection = 'right';
});

// Configuracio per als missatges arial-label

routerApp.config(['$mdAriaProvider', function ($mdAriaProvider) {
    $mdAriaProvider.disableWarnings();
}]);


// Controlador Missatge al premer boto Enviar al formulari

routerApp.controller('MessageController', function ($scope, $mdToast, $mdDialog) {
    $scope.showCustomToast = function () {
        $mdToast.show({
            hideDelay: 3000,
            position: 'top right',
            templateUrl: 'templates/toast-template.html'
        });
    };
    $scope.closeToast = function () {
        if (routerApp) return;

        $mdToast
          .hide()
          .then(function () {
              dialogApp = false;
          });
    };

    $scope.openMoreInfo = function (e) {
        if (routerApp) return;
        routerApp = true;

        $mdDialog
          .show($mdDialog
            .alert()
            .title('More info goes here.')
            .textContent('Something witty.')
            .ariaLabel('More info')
            .ok('Got it')
            .targetEvent(e)
          )
          .then(function () {
              routerApp = false;
          });
    };
});


// Controlador /Home

routerApp.controller('AppCtrl', function ($scope) {
    var COLORS = ['#ffebee', '#ffcdd2', '#ef9a9a', '#e57373', '#ef5350', '#f44336', '#e53935', '#d32f2f', '#c62828', '#b71c1c', '#ff8a80', '#ff5252', '#ff1744', '#d50000', '#f8bbd0', '#f48fb1', '#f06292', '#ec407a', '#e91e63', '#d81b60', '#c2185b', '#ad1457', '#880e4f', '#ff80ab', '#ff4081', '#f50057', '#c51162', '#e1bee7', '#ce93d8', '#ba68c8', '#ab47bc', '#9c27b0', '#8e24aa', '#7b1fa2', '#4a148c', '#ea80fc', '#e040fb', '#d500f9', '#aa00ff', '#ede7f6', '#d1c4e9', '#b39ddb', '#9575cd', '#7e57c2', '#673ab7', '#5e35b1', '#4527a0', '#311b92', '#b388ff', '#7c4dff', '#651fff', '#6200ea', '#c5cae9', '#9fa8da', '#7986cb', '#5c6bc0', '#3f51b5', '#3949ab', '#303f9f', '#283593', '#1a237e', '#8c9eff', '#536dfe', '#3d5afe', '#304ffe', '#e3f2fd', '#bbdefb', '#90caf9', '#64b5f6', '#42a5f5', '#2196f3', '#1e88e5', '#1976d2', '#1565c0', '#0d47a1', '#82b1ff', '#448aff', '#2979ff', '#2962ff', '#b3e5fc', '#81d4fa', '#4fc3f7', '#29b6f6', '#03a9f4', '#039be5', '#0288d1', '#0277bd', '#01579b', '#80d8ff', '#40c4ff', '#00b0ff', '#0091ea', '#e0f7fa', '#b2ebf2', '#80deea', '#4dd0e1', '#26c6da', '#00bcd4', '#00acc1', '#0097a7', '#00838f', '#006064', '#84ffff', '#18ffff', '#00e5ff', '#00b8d4', '#e0f2f1', '#b2dfdb', '#80cbc4', '#4db6ac', '#26a69a', '#009688', '#00897b', '#00796b', '#00695c', '#a7ffeb', '#64ffda', '#1de9b6', '#00bfa5', '#e8f5e9', '#c8e6c9', '#a5d6a7', '#81c784', '#66bb6a', '#4caf50', '#43a047', '#388e3c', '#2e7d32', '#1b5e20', '#b9f6ca', '#69f0ae', '#00e676', '#00c853', '#f1f8e9', '#dcedc8', '#c5e1a5', '#aed581', '#9ccc65', '#8bc34a', '#7cb342', '#689f38', '#558b2f', '#33691e', '#ccff90', '#b2ff59', '#76ff03', '#64dd17', '#f9fbe7', '#f0f4c3', '#e6ee9c', '#dce775', '#d4e157', '#cddc39', '#c0ca33', '#afb42b', '#9e9d24', '#827717', '#f4ff81', '#eeff41', '#c6ff00', '#aeea00', '#fffde7', '#fff9c4', '#fff59d', '#fff176', '#ffee58', '#ffeb3b', '#fdd835', '#fbc02d', '#f9a825', '#f57f17', '#ffff8d', '#ffff00', '#ffea00', '#ffd600', '#fff8e1', '#ffecb3', '#ffe082', '#ffd54f', '#ffca28', '#ffc107', '#ffb300', '#ffa000', '#ff8f00', '#ff6f00', '#ffe57f', '#ffd740', '#ffc400', '#ffab00', '#fff3e0', '#ffe0b2', '#ffcc80', '#ffb74d', '#ffa726', '#ff9800', '#fb8c00', '#f57c00', '#ef6c00', '#e65100', '#ffd180', '#ffab40', '#ff9100', '#ff6d00', '#fbe9e7', '#ffccbc', '#ffab91', '#ff8a65', '#ff7043', '#ff5722', '#f4511e', '#e64a19', '#d84315', '#bf360c', '#ff9e80', '#ff6e40', '#ff3d00', '#dd2c00', '#d7ccc8', '#bcaaa4', '#795548', '#d7ccc8', '#bcaaa4', '#8d6e63', '#eceff1', '#cfd8dc', '#b0bec5', '#90a4ae', '#78909c', '#607d8b', '#546e7a', '#cfd8dc', '#b0bec5', '#78909c'];

    this.colorTiles = (function () {
        var tiles = [];
        for (var i = 0; i < 46; i++) {
            tiles.push({
                color: randomColor(),
                colspan: randomSpan(),
                rowspan: randomSpan()
            });
        }
        return tiles;
    })();

    function randomColor() {
        return COLORS[Math.floor(Math.random() * COLORS.length)];
    }

    function randomSpan() {
        var r = Math.random();
        if (r < 0.8) {
            return 1;
        } else if (r < 0.9) {
            return 2;
        } else {
            return 3;
        }
    }
});

// Controlador Imatge Carta contact

routerApp.controller('CardController', function($scope) {
    $scope.imagePath = 'img/logo.jpg';
});