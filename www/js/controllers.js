angular.module('starter.controllers', [])

    .controller('DashCtrl', function($scope) { })

    .controller('ChatsCtrl', function($scope, Chats) {
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        $scope.chats = Chats.all();
        $scope.remove = function(chat) {
            Chats.remove(chat);
        };
    })

    .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
    })

    .controller('AccountCtrl', function($scope) {
        //$scope.newUser = [];
        $scope.user = {
            firstName: "Chauncey",
            lastName: "Peppertooth",
            username: "see_pepper",
            bio: "Designer at @fuzzco, Soccer dad, pokémaster. Grip co-founder.",
            avatar: "https://s-media-cache-ak0.pinimg.com/564x/aa/68/d0/aa68d07f618d5e0db3274280d792f39f.jpg",
            locationCity: "Boise",
            locationState: "Idaho",
            locationCountry: "U.S.A.",
            badges: [
                {
                    name: "Pro",
                    image: "http://www.bandanaworld.com/20108.JPG"
                },
                {
                    name: "100Grips",
                    image: "http://www.bandanaworld.com/20108.JPG"
                }
            ],
            rating: 3.5,
            friends: [
                {
                    username: "boat_junk_boat",
                    friendBadges: [
                        {
                            name: "Whatever",
                            image: "http://www.bandanaworld.com/20108.JPG"
                        },
                        {
                            name: "100Grips",
                            image: "http://www.bandanaworld.com/20108.JPG"
                        }],
                    rating: 3.5,
                    avatar: "https://lh5.googleusercontent.com/-aiYNuzS3sQ0/AAAAAAAAAAI/AAAAAAAAAGw/U_s11kAXvXY/s0-c-k-no-ns/photo.jpg"
                },
                {
                    username: "charliez_angles",
                    badges: [
                        {
                            name: "Doesn't Matter",
                            image: "http://www.bandanaworld.com/20108.JPG"
                        },
                        {
                            name: "Some other stuff",
                            image: "http://www.bandanaworld.com/20108.JPG"
                        }],
                    rating: 3.5,
                    avatar: "https://s-media-cache-ak0.pinimg.com/564x/8c/34/0f/8c340f41fc179452186fe68fea721849.jpg"
                },
            ]
        };
    })

    .controller('GripsCtrl', function($scope) {
        $scope.grip = {
            title: "MoMA Show",
            locationCity: "New York City",
            locationState: "NY",
            locationCountry: "U.S.A.",
            date: new Date,
            image: "https://lh5.googleusercontent.com/-aiYNuzS3sQ0/AAAAAAAAAAI/AAAAAAAAAGw/U_s11kAXvXY/s0-c-k-no-ns/photo.jpg",
            tags: ["Art", "Music", "Basquiat"],
            gripper: [user],
            viewers: []
        }
    })

