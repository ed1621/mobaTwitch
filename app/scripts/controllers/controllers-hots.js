'use strict';

var app = angular.module('mobaTwitchApp');

app.controller('hotsController', function($scope, hots){
  $scope.getGame = function(){
    hots.getGame().then(function(data){
      var twitchTest = data.data.streams;
      $scope.streamInfo = hots.streamData(twitchTest);
    });
  };
});
