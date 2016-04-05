(function() {
    'use strict';

    angular
        .module('starter')
        .controller('GripsController', GripsController);

    GripsController.$inject = ['$scope'];
    function GripsController($scope) {
         $scope.grips = [
            {
                title: "MoMA Show",
                locationCity: "New York City",
                locationState: "NY",
                locationCountry: "U.S.A.",
                date: new Date(),
                image: "https://lh5.googleusercontent.com/-aiYNuzS3sQ0/AAAAAAAAAAI/AAAAAAAAAGw/U_s11kAXvXY/s0-c-k-no-ns/photo.jpg",
                tags: ["Art", "Music", "Basquiat"],
                gripper: [user],
                viewers: []
            },
            {
                title: "MoMA Show",
                locationCity: "New York City",
                locationState: "NY",
                locationCountry: "U.S.A.",
                date: new Date(),
                image: "https://lh5.googleusercontent.com/-aiYNuzS3sQ0/AAAAAAAAAAI/AAAAAAAAAGw/U_s11kAXvXY/s0-c-k-no-ns/photo.jpg",
                tags: ["Art", "Music", "Basquiat"],
                gripper: [user],
                viewers: []
            },
        ]

    }
})()