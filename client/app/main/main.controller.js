'use strict';

angular.module('assignApp')
    .controller('MainCtrl', function ($scope, $http) {

        //This function fetches user information
        function get() {
            $http.get('/api/users').success(function (users) {
                $scope.users = users;
            });
        }

        get();

        //This method fethces data from url given and saves in database
        $scope.addThing = function () {
            if ($scope.url === '') {
                return;
            }
            $http.get($scope.url).then(function (result) {
                var users = [];
                var data = result.data.data;
                data.forEach(function (u) {
                    var user = {};
                    user.username = u.user.username;
                    user.avatar_image = u.user.avatar_image;
                    users.push(user);
                });
                save(users);
            });
        };

        //This method saves username and images in database
        function save(users) {
            $http.post('/api/users', users).then(function (users) {
                get();
            });
        }


    });
