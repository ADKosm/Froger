(function(){
    var app = angular.module('frog-party', [
        'templates',
        'ngRoute',
        'ngResource',
        'controllers',
        'angular-flash.service',
        'angular-flash.flash-alert-directive',
        'ui.bootstrap',
        'ngFileUpload'
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

    app.run(function($rootScope) {
        $rootScope.$on("$routeChangeSuccess", function(event, next, current) {
            setTimeout(function(){
                $('a.fullsizeble').fullsizable();
            }, 1000);
        });
    });

})();
