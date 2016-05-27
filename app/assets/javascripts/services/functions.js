(function(){
    var controllers = angular.module('controllers');

    controllers.service('funcs', ['$http', '$location', '$resource', '$route', 'Upload', function($http, $location, $resource, $route, Upload){
        this.link_to_board = function(board) {
            if(board) return '#'.concat("/", board.name);
        };
        this.link_to_tread = function(tread) {
            if(tread) return '#'.concat("/", tread.board_id, "/", tread.id);
        };

        this.load_reply = function(post) {
            return {id: 7, subject: 'Helloo', text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
                image: 'http://img.artlebedev.ru/;-)/raisin.gif', reply_to: 2}; //TODO: get data from back-end
        };

        this.uploadPost = function(scope) {
            var post = scope.new_post;
            Upload.upload({
                url: ''.concat('/treads/posts/', post.reply_to, '/create'),
                data: {
                    file: post.file,
                    'subject': post.subject,
                    'text': post.text,
                    'reply_to': post.reply_to
                }
            }).then(function (resp) {
                $location.path(''.concat('/', resp.data.board_id, '/', resp.data.id));
                $route.reload();
            }, function (resp) {
                alert("Something went wrong!");
                scope.butText = 'Send';
            });
        };

        this.uploadTread = function(tread) {

            Upload.upload({
                url: ''.concat('/boards/treads/', tread.board_id, '/create'),
                data: {
                    file: tread.file,
                    'name': tread.name,
                    'subject': tread.subject,
                    'text': tread.text
                }
            }).then(function (resp) {
                $route.reload();
            }, function (resp) {
                alert("Something went wrong!");
            });

        };

        this.loadTreadNumber = function(board, scope) {
            var treadNumber = $resource('/boards/treads/:board_id/number.:format', {format: 'json'});

            treadNumber.get({board_id: board.name}, function (number) {
                scope.treadNumber = number.number;
                scope.limit = number.limit;
            })
        };

        this.loadPostNumber = function(tread, scope) {
            var postNumber = $resource('/treads/posts/:tread_id/number.:format', {format: 'json'});

            postNumber.get({tread_id: tread.id}, function (number) {
                scope.postNumber = number.number;
                scope.limit = number.limit;
            })
        };

        this.loadLogo = function(scope) {
            // scope.logo_src = 'https://angularjs.org/img/AngularJS-large.png';
            // setTimeout(function () {
            //     scope.logo_src = "http://is4.mzstatic.com/image/thumb/Purple1/v4/9e/42/21/9e422186-d13b-b0ba-271e-5611054f67b3/mzl.tlmnhswr.jpg/0x0ss-85.jpg";
            //     scope.$apply();
            // }, 2000);
            scope.logo_src = "http://is4.mzstatic.com/image/thumb/Purple1/v4/9e/42/21/9e422186-d13b-b0ba-271e-5611054f67b3/mzl.tlmnhswr.jpg/0x0ss-85.jpg";
        }

    }]);
})();