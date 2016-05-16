(function(){
    var app = angular.module('frog-party', [
        'templates',
        'ngRoute',
        'ngResource',
        'controllers',
        'angular-flash.service',
        'angular-flash.flash-alert-directive',
        'ui.bootstrap',
        'lr.upload'
    ]);

    app.config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/', {
            templateUrl: 'home.html',
            controller: 'HomeController'
        }).when("/:board_name", {
            templateUrl: 'board.html',
            controller: 'BoardController'
        }).when("/:board_name/:tread_id", {
            templateUrl: 'tread.html',
            controller: 'TreadController'
        });

    }]);

    var controllers = angular.module('controllers', []);

})();
