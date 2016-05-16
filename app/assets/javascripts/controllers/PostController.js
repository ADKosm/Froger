(function(){
    var controller = angular.module('controllers');

    controller.directive('singlePost', [ function(){
        return {
            restrict: 'E',
            scope: {
                post: '=post'
            },
            templateUrl: 'single_post.html'
        };
    }]);

    controller.directive('replyToButton', ['funcs', function(funcs){
        return {
            restrict: 'E',
            scope: {
                repPost: '=post'
            },
            templateUrl: 'reply_to_button.html',
            link: function(scope, element, attrs) {
                scope.post = funcs.load_reply(scope.repPost);
            }
        };
    }]);

    controller.directive('replyButton', ['funcs', function(funcs){
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                post: '=post'
            },
            templateUrl: 'reply_button.html',
            link: function(scope, element, attrs) {
                scope.new_post = {}
                scope.upload = function() {
                    funcs.uploadPost(scope.new_post, scope.file)
                };
            }
        };
    }]);
})();
