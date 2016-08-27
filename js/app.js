var app = angular.module("materializeApp", ["store-directives"]);

app.controller("GameController",["$http", function($http){

    var game = this;
    game.players = [];

    $http(requests.game)
        .success(function (data) {

            if (data.ErrorCode === 0) {

                for (var i= 0; i < data.Result.users.length; i++) {

                    game.players.push({

                        name: data.Result.users[i].Name,
                        image: data.Result.users[i].Image === null ? "images/no-image-profile.jpg" : "http://185.37.55.208:8090/nzh/image/?imageId=" + data.Result.users[i].Image.id + "&width=160&height=160"
                    });
                }
            }
        });
}]);

app.controller("MatchController",["$http", function($http){

    var game = this;
    game.games = [];

    $http(requests.match)
        .success(function (data) {

            if (data.ErrorCode === 0) {

                for (var i= 0; i < data.Result.length; i++) {

                    game.games.push({

                        name: data.Result[i].Name,
                        image: data.Result[i].previewInfo.id === null ? "images/no-image-profile.jpg" : "http://185.37.55.208:8090/nzh/image/?imageId=" + data.Result[i].previewInfo.id + "&width=160&height=160",
                        description: data.Result[i].GamePlayDesc
                    });
                }
            }
        });
}]);