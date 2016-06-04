(function(){
    var controllers = angular.module('controllers');

    controllers.controller('HomeController', ['$scope', '$resource', 'funcs', function($scope, $resource, funcs){
        $scope.funcs = funcs;

        var boardList = $resource('/boards/list.:format', {format: 'json'}, { get: {method: 'GET', isArray: true} });

        boardList.get({}, function(list){
            $scope.boards = list;
        });

        var commentedList = $resource('/treads/commented.:format', {format: 'json'}, {get: {method: 'GET', isArray: true} });

        commentedList.get({}, function(list){
            $scope.commented_treads = list;
        });

        var viewedList = $resource('/treads/viewed.:format', {format: 'json'}, {get: {method: 'GET', isArray: true} });

        viewedList.get({}, function(list){
            $scope.viewed_treads = list;
        });
        
        
    }]);

    controllers.directive('badge', ['funcs', function(funcs){
        return {
            restrict: 'A',
            scope: {
                tread: '=tread'
            },
            templateUrl: 'badge.html',
            link: function(scope, elements, attrs){
                scope.$watch('tread', function(tr){
                    funcs.loadPostNumber(tr, scope);
                    funcs.loadViewsNumber(tr, scope);
                });
                scope.$watch('postNumber', function(p){
                    scope.comments = scope.postNumber;
                });
                scope.$watch('viewNumber', function(p){
                    scope.views = scope.viewNumber
                });
            }
        };
    }]);

    controllers.directive('pager', [ '$location', '$routeParams', 'funcs', function($location, $routeParams, funcs){
        return {
            restrict: 'E',
            templateUrl: 'pager.html',
            scope: {
                board: '=board',
                tread: '=tread'
            },
            link: function(scope, element, attrs) {
                scope.$watch('board', function (board) {
                    if(board){
                        funcs.loadTreadNumber(board, scope);
                    }
                });
                scope.$watch('tread', function(tread){
                    if(tread){
                        funcs.loadPostNumber(tread, scope);
                    }
                });
                var setLinks = function(tr) {
                    var limit = scope.limit;
                    var all = scope.treadNumber || scope.postNumber;
                    var current = parseInt($routeParams.page || 0, 10);

                    var maxPage = Math.max(Math.floor(all/limit) + Math.min(1, all % limit) - 1, 0) ;

                    scope.prev = "#".concat($location.path(), "?page=", Math.max(0, current - 1));
                    scope.next = "#".concat($location.path(), "?page=", Math.min(maxPage, current+1));
                    scope.last = "#".concat($location.path(), "?page=", maxPage);
                };
                scope.$watch('treadNumber', setLinks);
                scope.$watch('postNumber', setLinks);
            }
        }
    }]);

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