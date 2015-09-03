'use strict';

var app = angular.module('mobaTwitchApp');

app.filter('trustAsResourceUrl', ['$sce', function($sce) {
    return function(val) {
        return $sce.trustAsResourceUrl(val);
    };
}]);

app.controller('lolController', function($scope, $sce, lol){
  $scope.getGame = function(){
    $scope.streamInfo = [];
    lol.getGame().then(function(data){
      var twitchTest = data.data.streams;
      $scope.streamInfo = lol.streamData(twitchTest);
    });
  };

    $scope.matches = lol.getTournaments();

  $scope.user = function(user){
    $scope.detailFrame= "https://twitch.tv/"+ user +"/embed";
    console.log($scope.detailFrame);
    return $scope.detailFrame;
  };

  $scope.test = function(){
    console.log($scope.detailFrame);
  };

});
