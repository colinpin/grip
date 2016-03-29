angular.module('starter.controllers', [])

    .controller('DashCtrl', function($scope) { })


    .controller('AccountCtrl', function($scope) {
        //$scope.newUser = [];
        $scope.loggedIn = "http://grip.firebaseio.com/users/" + ""
        $scope.user = {
            ID: "",
            firstName: "Chauncey",
            lastName: "Peppertooth",
            username: "see_pepper",
            bio: "Designer at @fuzzco, Soccer dad, pokémaster. Grip co-founder.",
            avatar: "https://s-media-cache-ak0.pinimg.com/564x/aa/68/d0/aa68d07f618d5e0db3274280d792f39f.jpg",
            locationCity: "Boise",
            locationState: "Idaho",
            locationCountry: "U.S.A.",
            email: "soandso@gmail.com",
            password: "••••••••••",
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
            grips: [
                {
                    title: "MoMA Show Opening",
                    locationCity: "New York City",
                    locationState: "NY",
                    locationCountry: "U.S.A.",
                    date: new Date(),
                    image: "https://lh5.googleusercontent.com/-aiYNuzS3sQ0/AAAAAAAAAAI/AAAAAAAAAGw/U_s11kAXvXY/s0-c-k-no-ns/photo.jpg",
                    tags: ["Art", "Music", "Basquiat"],
                    gripper: "@username",
                    viewers: "Archie"
                },
                {
                    title: "People Arguing at Restaurant",
                    locationCity: "New York City",
                    locationState: "NY",
                    locationCountry: "U.S.A.",
                    date: new Date(),
                    image: "http://images.teamsugar.com/files/upl0/0/3362/02_2008/AA032434.preview.jpg",
                    tags: ["Art", "Music", "Basquiat"],
                    gripper: "@username",
                    viewers: "Archie"
                },
                {
                    title: "Lionel Messi",
                    locationCity: "Barcelona",
                    locationState: "",
                    locationCountry: "Spain",
                    date: new Date(),
                    image: "http://i.telegraph.co.uk/multimedia/archive/03054/messi1_3054545b.jpg",
                    tags: ["Sports", "Soccer", "Messi"],
                    gripper: "@username",
                    viewers: "Archie"
                },
            ],
            views: [
                {
                    title: "MoMA Show",
                    locationCity: "New York City",
                    locationState: "NY",
                    locationCountry: "U.S.A.",
                    date: new Date(),
                    image: "https://lh5.googleusercontent.com/-aiYNuzS3sQ0/AAAAAAAAAAI/AAAAAAAAAGw/U_s11kAXvXY/s0-c-k-no-ns/photo.jpg",
                    tags: ["Art", "Music", "Basquiat"],
                    gripper: "@username",
                    viewers: "Archie"
                },
                {
                    title: "MoMA Show",
                    locationCity: "New York City",
                    locationState: "NY",
                    locationCountry: "U.S.A.",
                    date: new Date(),
                    image: "https://lh5.googleusercontent.com/-aiYNuzS3sQ0/AAAAAAAAAAI/AAAAAAAAAGw/U_s11kAXvXY/s0-c-k-no-ns/photo.jpg",
                    tags: ["Art", "Music", "Basquiat"],
                    gripper: "@username",
                    viewers: "Archie"
                },
            ],
            friends: [
                {
                    username: "boat_junk_boat",
                    name: "Garth Longtorso",
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
                    name: "Garth Longtorso",
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
                {
                    username: "boat_junk_boat",
                    name: "Garth Longtorso",
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
                    name: "Garth Longtorso",
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
                }
            ]
        };
    })

    .controller('GripsCtrl', function($scope) {
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
    })

    .controller("signupCtrl", function($scope, $firebaseArray) {
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
       

    })

    .controller("loginCtrl", function($scope, $firebaseArray) {
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
    })
