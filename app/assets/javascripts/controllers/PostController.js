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
                funcs.load_reply(scope);
            }
        };
    }]);

    controller.directive('replyButton', ['$sce', 'funcs', function($sce, funcs){
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                post: '=post'
            },
            templateUrl: 'reply_button.html',
            link: function(scope, element, attrs) {

                scope.butText = 'Send';
                scope.new_post = {};
                scope.upload = function() {
                    scope.new_post.reply_to = scope.post.id;
                    scope.butText = '\u23F3';
                    funcs.uploadPost(scope);
                };
            }
        };
    }]);
})();
