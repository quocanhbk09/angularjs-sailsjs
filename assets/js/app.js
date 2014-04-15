angular
    .module('app', [
        'ui.router'
    ])

    .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/js/templates/home.html',
                controller: 'homeCtrl'
            })
            .state('tool', {
                url: '/tool',
                templateUrl: '/js/templates/tool.html',
                controller: 'toolCtrl'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/js/templates/about.html',
                controller: 'aboutCtrl'
            })
    }]);
