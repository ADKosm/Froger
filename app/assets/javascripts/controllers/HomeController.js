(function(){
    var controllers = angular.module('controllers');

    controllers.controller('HomeController', ['$scope', 'funcs', function($scope, funcs){
        $scope.funcs = funcs;

        $scope.boards = [
            [
                {name: "h", full_name: 'Hello'},
                {name: "h", full_name: 'Hello'},
                {name: "h", full_name: 'Hello'},
                {name: "h", full_name: 'Hello'},
                {name: "h", full_name: 'Hello'},
                {name: "h", full_name: 'Hello'}],
            [
                {name: "h", full_name: 'Hello'},
                {name: "h", full_name: 'Hello'},
                {name: "h", full_name: 'Hello'},
                {name: "h", full_name: 'Hello'},
                {name: "h", full_name: 'Hello'},
                {name: "h", full_name: 'Hello'}]
        ];

        $scope.commented_treads = [
            {board_name: 'h', name: 'Its a name of thread', id:71},
            {board_name: 'h', name: 'Its a name of thread', id:71},
            {board_name: 'h', name: 'Its a name of thread', id:71},
            {board_name: 'h', name: 'Its a name of thread', id:71} // TODO: get from back-end
        ];
    }]);

    controllers.directive('badge', function(){
        return {
            restrict: 'A',
            scope: {
                tread: '=tread'
            },
            templateUrl: 'badge.html',
            link: function(scope, elements, attrs){
                scope.comments = 2;
                scope.views = 3; //TODO: get from back-end
            }
        };
    });

    controllers.directive('file', function () {
        return {
            scope: {
                file: '='
            },
            link: function (scope, el, attrs) {
                el.bind('change', function (event) {
                    var file = event.target.files[0];
                    scope.file = file ? file : undefined;
                    scope.$apply();
                });
            }
        };
    });

    controllers.directive('logo', ['funcs', function(funcs){
        return {
            restrict: 'E',
            templateUrl: 'logo.html',
            link: function(scope, element, attrs) {
                funcs.loadLogo(scope);
            }
        };
    }]);

})();