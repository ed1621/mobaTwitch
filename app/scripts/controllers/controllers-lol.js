'use strict';

var app = angular.module('mobaTwitchApp');

app.controller('lolController', function($scope, lol){
  $scope.getGame = function(){
    $scope.streamInfo = [];
    lol.getGame().then(function(data){
      var twitchTest = data.data.streams;
      $scope.streamInfo = lol.streamData(twitchTest);

      console.log($scope.streamInfo.preview);
    });
  };
});
