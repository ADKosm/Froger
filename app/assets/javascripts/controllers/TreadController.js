(function(){
    var controllers = angular.module('controllers');

    controllers.controller('TreadController', ['$scope', function($scope){
        $scope.tread = {board_name: 'h', name: 'Its a name of thread', id:71, posts:[
            {id: 0, subject: 'Hello', text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
                image: 'http://img.artlebedev.ru/;-)/raisin.gif'},
            {id: 3, subject: 'Hello', text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
                image: 'http://img.artlebedev.ru/;-)/raisin.gif', reply_to: 0},
            {id: 5, subject: 'Hello', text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
                image: 'http://img.artlebedev.ru/;-)/raisin.gif', reply_to: 1},
            {id: 7, subject: 'Hello', text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
                image: 'http://img.artlebedev.ru/;-)/raisin.gif', reply_to: 2}
        ]};

        $scope.board = {
            name: 'h',
            full_name: 'Hello',
            description: "YoYo, it is a first fish board. I am so glad to be first here that I am goint to write this text more than one time. YoYo, it is a first fish board. I am so glad to be first here that I am goint to write this text more than one time. YoYo, it is a first fish board. I am so glad to be first here that I am goint to write this text more than one time."
        };

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

    controllers.directive('singleTread', function() {
        return {
            restrict: 'E',
            scope: {
                tread: '=tread'
            },
            templateUrl: 'single_tread.html'
        };
    });

    controllers.directive('startTreadButton', ['funcs', function(funcs){
        return {
            restrict: 'E',
            templateUrl: 'start_tread_button.html',
            link: function(scope, element, attrs) {
                scope.new_tread = {};
                scope.upload = function () {
                    funcs.uploadTread(scope.new_tread, scope.file);
                }
            }
        };
    }]);

})();