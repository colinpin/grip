(function() {
    'use strict';

    angular
        .module('starter')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$scope'];
    function LoginCtrl($scope) {
        var ref = new Firebase("https://grip.firebaseio.com/users");
        $scope.loginUser = function() {
            ref.authWithPassword({
                email: $scope.userEmail,
                password: $scope.userPassword
            }, function(error, authData) {
                if (error) {
                    console.log("Login Failed!", error);
                } else {
                    console.log("Authenticated successfully with payload:", authData);
                }
            });
        }
    }
})();