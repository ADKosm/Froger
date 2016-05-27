(function(){
    var controllers = angular.module('controllers');

    controllers.controller('TreadController', ['$scope', '$resource', '$routeParams', function($scope, $resource, $routeParams){

        var boardRes = $resource('/boards/show/:board_id.:format', {format: 'json'});
        var treadsRes = $resource('/treads/show/:tread_id.:format', {format: 'json'});

        boardRes.get({board_id: $routeParams.board_name}, function(board) {
            $scope.board = board;
        });

        treadsRes.get({tread_id: $routeParams.tread_id, page: $routeParams.page}, function (tread) {
            $scope.tread = tread;
        });

    }]);

    controllers.directive('treadList', [ 'funcs', function(funcs){
        return {
            restrict: 'A',
            scope: {
                treads: '=treads'
            },
            templateUrl: 'home/treads_list.html',
            link: function(scope, element, attrs) {
                scope.link_to = funcs.link_to_tread;
            }
        };
    }]);

    controllers.directive('singleTread', ['funcs', function(funcs) {
        return {
            restrict: 'E',
            scope: {
                tread: '=tread'
            },
            templateUrl: 'single_tread.html',
            link: function(scope, element, attrs) {
                scope.funcs = funcs;
            }
        };
    }]);

    controllers.directive('startTreadButton', ['$routeParams', 'funcs', function($routeParams, funcs){
        return {
            restrict: 'E',
            templateUrl: 'start_tread_button.html',
            link: function(scope, element, attrs) {
                scope.new_tread = { board_id: $routeParams.board_name || null };
                scope.upload = function () {
                    funcs.uploadTread(scope.new_tread);
                }
            }
        };
    }]);

})();