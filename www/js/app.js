//angular.module('octoCore', ['ui.router', 'controllers', 'factories'])

angular.module('octoCore', ['ui.router', 'controller', 'factories'])

.config(function ($stateProvider, $httpProvider, $urlRouterProvider) {
    $httpProvider.defaults.headers.post['Content-Type'] = "application/json";
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'homeCtrl'
        })

        // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.when('', '/home');
    $urlRouterProvider.otherwise('/home');
})
