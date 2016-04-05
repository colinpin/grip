(function() {
'use strict';

    angular
        .module('starter')
        .controller('SignupCtrl', SignupCtrl);

    SignupCtrl.$inject = ['$scope'];
    function SignupCtrl($scope) {
        var ref = new Firebase("https://grip.firebaseio.com/users");
        $scope.addUser = function() {
            ref.createUser({
                firstName: $scope.newUserFirstName,
                lastName: $scope.newUserLastName,
                username: $scope.newUserUsername,
                avatar: "https://s-media-cache-ak0.pinimg.com/564x/a1/b6/38/a1b638245c1e90e9d578ff18fc19f03a.jpg",
                email: $scope.newUserEmail,
                password: $scope.newUserPassword
            }, function(error, userData) {
                if (error) {
                    console.log("Error creating user:", error);
                } else {
                    console.log("Successfully created user account with uid:", userData.uid);
                }
            });
        }
    }
})();