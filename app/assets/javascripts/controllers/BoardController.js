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

        // $scope.threads = [
        //     {board_name: 'h', name: 'Its a name of thread', id:71, posts:[
        //         {id: 0, subject: 'Hello', text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
        //         image: 'http://img.artlebedev.ru/;-)/raisin.gif'},
        //         {id: 3, subject: 'Hello', text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
        //             image: 'http://img.artlebedev.ru/;-)/raisin.gif', reply_to: 0},
        //         {id: 5, subject: 'Hello', text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
        //             image: 'http://img.artlebedev.ru/;-)/raisin.gif', reply_to: 1},
        //         {id: 7, subject: 'Hello', text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
        //             image: 'http://img.artlebedev.ru/;-)/raisin.gif', reply_to: 2}
        //     ]},
        //     {board_name: 'h', name: 'Its a name of thread', id:71, posts:[
        //         {subject: 'Hello', text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
        //             image: 'http://img.artlebedev.ru/;-)/raisin.gif'},
        //         {subject: 'Hello', text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
        //             image: 'http://img.artlebedev.ru/;-)/raisin.gif'},
        //         {subject: 'Hello', text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
        //             image: 'http://img.artlebedev.ru/;-)/raisin.gif'},
        //         {subject: 'Hello', text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
        //             image: 'http://img.artlebedev.ru/;-)/raisin.gif'}
        //     ]},
        //     {board_name: 'h', name: 'Its a name of thread', id:71, posts:[
        //         {subject: 'Hello', text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
        //             image: 'http://img.artlebedev.ru/;-)/raisin.gif'},
        //         {subject: 'Hello', text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
        //             image: 'http://img.artlebedev.ru/;-)/raisin.gif'},
        //         {subject: 'Hello', text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
        //             image: 'http://img.artlebedev.ru/;-)/raisin.gif'},
        //         {subject: 'Hello', text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
        //             image: 'http://img.artlebedev.ru/;-)/raisin.gif'}
        //     ]},
        //     {board_name: 'h', name: 'Its a name of thread', id:71, posts:[
        //         {subject: 'Hello', text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
        //             image: 'http://img.artlebedev.ru/;-)/raisin.gif'},
        //         {subject: 'Hello', text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
        //             image: 'http://img.artlebedev.ru/;-)/raisin.gif'},
        //         {subject: 'Hello', text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
        //             image: 'http://img.artlebedev.ru/;-)/raisin.gif'},
        //         {subject: 'Hello', text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
        //             image: 'http://img.artlebedev.ru/;-)/raisin.gif'}
        //     ]} // TODO: get from back-end
        // ];
        //
        // $rootScope.load_reply = function(post) {
        //     return $scope.threads[0].posts[post.reply_to];
        // };

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