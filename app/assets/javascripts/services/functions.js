(function(){
    var controllers = angular.module('controllers');

    controllers.service('funcs', ['$http', function($http){
        this.link_to_board = function(board) { return '#'.concat("/", board.name) };
        this.link_to_tread = function(tread) { return '#'.concat("/", tread.board_name, "/", tread.id) }

        this.load_reply = function(post) {
            return {id: 7, subject: 'Helloo', text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
                image: 'http://img.artlebedev.ru/;-)/raisin.gif', reply_to: 2}; //TODO: get data from back-end
        };

        this.uploadPost = function(post, file) {
            $http({
                method: 'POST',
                url: '/upload-post',
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                data: {
                    subject: post.subject,
                    text: post.text,
                    image: file
                },
                transformRequest: function (data, headersGetter) {
                    var formData = new FormData();
                    angular.forEach(data, function (value, key) {
                        formData.append(key, value);
                    });

                    return formData;
                }
            }).success(function (data) {
                alert("It is a success!");
            }).error(function (data, status) {
                alert('Something wenr wrong!');
            });
        };

        this.uploadTread = function(tread, file) {
            $http({
                method: 'POST',
                url: '/upload-tread', //TODO: change to real urls
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                data: {
                    name: tread.name,
                    subject: tread.subject,
                    text: tread.text,
                    image: file
                },
                transformRequest: function (data, headersGetter) {
                    var formData = new FormData();
                    angular.forEach(data, function (value, key) {
                        formData.append(key, value);
                    });

                    return formData;
                }
            }).success(function (data) {
                alert("It is a success!");
            }).error(function (data, status) {
                alert('Something wenr wrong!');
            });
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