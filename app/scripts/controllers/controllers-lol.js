'use strict';

var app = angular.module('mobaTwitchApp');

app.filter('trustAsResourceUrl', ['$sce', function($sce) {
    return function(val) {
        return $sce.trustAsResourceUrl(val);
    };
}]);

app.controller('lolController', function($scope, apiService){
  $scope.getGame = function(){
    apiService.getGame('League+of+Legends').then(function(data){
      var twitchTest = data.data.streams;
      $scope.streamInfo = apiService.streamData(twitchTest);
    });
  };

    $scope.matches = apiService.getTournaments('lol');

  $scope.user = function(user){
    $scope.detailFrame= "https://twitch.tv/"+ user +"/embed";
    console.log($scope.detailFrame);
    return $scope.detailFrame;
  };

  $scope.test = function(){
    console.log($scope.detailFrame);
  };

});
