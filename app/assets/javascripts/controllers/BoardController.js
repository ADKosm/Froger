(function() {
    var controllers = angular.module('controllers');
    
    controllers.controller('BoardController', ['$scope', '$rootScope', '$resource', '$routeParams', function($scope, $rootScope, $resource, $routeParams) {

        var boardRes = $resource('/boards/show/:board_id.:format', {format: 'json'});
        var treadsRes = $resource('/boards/treads/:board_id.:format', {format: 'json'}, { get: {method: 'GET', isArray: true} });
        
        boardRes.get({board_id: $routeParams.board_name}, function(board) {
            $scope.board = board;
        });

        treadsRes.get({board_id: $routeParams.board_name, page: $routeParams.page || 0}, function (treads) {
            $scope.threads = treads;
        });
    }]);

    controllers.directive('boardHeader', function () {
        return {
            restrict: 'E',
            templateUrl: 'board_header.html',
            scope: {
                board: '=board',
                tread: '=tread'
            }
        };
    })

})();