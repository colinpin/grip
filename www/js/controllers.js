angular.module('starter.controllers', [])

    .controller('DashCtrl', function($scope) { })


    .controller('AccountCtrl', function($scope) {
        $scope.requestGrip = function() {
            addGrip(users.users)
        }

        randomMargin = function(min, max) {
            min = 4;
            max = 40;
            return Math.floor(Math.random() * (max - min + 4) + min);
        }

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
                    gripId: "789879879879879",
                    title: "How do you make a chicken Nugget?",
                    location: "New York City",
                    date: new Date(),
                    deadline: "01.01.2017",
                    gripThumbnail: "https://lh5.googleusercontent.com/-aiYNuzS3sQ0/AAAAAAAAAAI/AAAAAAAAAGw/U_s11kAXvXY/s0-c-k-no-ns/photo.jpg",
                    gripBackground: "http://i.kinja-img.com/gawker-media/image/upload/s--BXgpHA6o--/c_scale,fl_progressive,q_80,w_800/189s4c133ujf0jpg.jpg",
                    type: "unique",
                    requestUid: "9872398742938749",
                    requestUsername: "McDonalds",
                    griprequestedBy: "ferg",
                    requests: "Colin, Bill, Joe",
                    points: 8901,
                    margin: randomMargin()
                },
                {
                    gripId: "789879879879879",
                    title: "How do you make a chicken Nugget?",
                    location: "New York City",
                    date: new Date(),
                    deadline: "01.01.2017",
                    gripThumbnail: "https://lh5.googleusercontent.com/-aiYNuzS3sQ0/AAAAAAAAAAI/AAAAAAAAAGw/U_s11kAXvXY/s0-c-k-no-ns/photo.jpg",
                    gripBackground: "http://i.kinja-img.com/gawker-media/image/upload/s--BXgpHA6o--/c_scale,fl_progressive,q_80,w_800/189s4c133ujf0jpg.jpg",
                    type: "unique",
                    requestUid: "9872398742938749",
                    requestUsername: "McDonalds",
                    griprequestedBy: "ferg",
                    requests: "Colin, Bill, Joe",
                    points: 8901,
                    margin: randomMargin()
                },
                {
                    gripId: "789879879879879",
                    title: "How do you make a chicken Nugget?",
                    location: "New York City",
                    date: new Date(),
                    deadline: "01.01.2017",
                    gripThumbnail: "https://lh5.googleusercontent.com/-aiYNuzS3sQ0/AAAAAAAAAAI/AAAAAAAAAGw/U_s11kAXvXY/s0-c-k-no-ns/photo.jpg",
                    gripBackground: "http://i.kinja-img.com/gawker-media/image/upload/s--BXgpHA6o--/c_scale,fl_progressive,q_80,w_800/189s4c133ujf0jpg.jpg",
                    type: "unique",
                    requestUid: "9872398742938749",
                    requestUsername: "McDonalds",
                    griprequestedBy: "ferg",
                    requests: "Colin, Bill, Joe",
                    points: 8901,
                    margin: randomMargin()
                }

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
            following: []
        };
    })

    .controller('gripsCtrl', function($scope) {
        $scope.grips = [
            {
                gripId: "789879879879879",
                title: "How do you make a chicken Nugget?",
                location: "New York City",
                date: new Date(),
                deadline: "01.01.2017",
                gripThumbnail: "https://lh5.googleusercontent.com/-aiYNuzS3sQ0/AAAAAAAAAAI/AAAAAAAAAGw/U_s11kAXvXY/s0-c-k-no-ns/photo.jpg",
                gripBackground: "http://i.kinja-img.com/gawker-media/image/upload/s--BXgpHA6o--/c_scale,fl_progressive,q_80,w_800/189s4c133ujf0jpg.jpg",
                type: "unique",
                requestUid: "9872398742938749",
                requestUsername: "McDonalds",
                griprequestedBy: "ferg",
                requests: "Colin, Bill, Joe",
                points: 8901,
                margin: randomMargin()
            }

        ];

        $scope.randomMargin = function(min, max) {
            min = 5;
            max = 50;
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

    })

    .controller("signupCtrl", function($scope, $firebaseArray, $firebaseAuth) {
        $scope.addUser = function() {
            var ref = new Firebase("https://grip.firebaseio.com/users");
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
                    var ref = new Firebase("https://grip.firebaseio.com/users");
                    var users = $firebaseArray(ref);
                    users.$add({
                        uid: userData.uid,
                        firstName: $scope.newUserFirstName,
                        lastName: $scope.newUserLastName,
                        username: $scope.newUserUsername,
                        avatar: "https://s-media-cache-ak0.pinimg.com/564x/a1/b6/38/a1b638245c1e90e9d578ff18fc19f03a.jpg",
                        email: $scope.newUserEmail,
                        password: $scope.newUserPassword
                    })
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

// .controller('gripsCtrl', function($scope, $ionicPopup, $timeout) {

//     $scope.gripPopup = function() {
//         $scope.data = {};
//         var gripPopup = $ionicPopup.show({
//             templateUrl: 'create-grip.html'
//         });
//     }
// });

var uid = "";
var loggedIn = {
    username: users.uid.username,
    avatar: users.uid.avatar,
    following: [],
    grips: []
}
var addGrip = function(uid, user) {
    var ref = new Firebase("https://grip.firebaseio.com/grips");
    var grip = $firebaseArray(ref);
    grips.$addGrip({
        gripId: gripId,
        title: $scope.newGripTitle,
        type: $scope.newUserLastName,
        requestUid: user,
        requestedBy: uid,
        requests: [],
        thumbnail: "https://s-media-cache-ak0.pinimg.com/564x/a1/b6/38/a1b638245c1e90e9d578ff18fc19f03a.jpg"
    })
}


