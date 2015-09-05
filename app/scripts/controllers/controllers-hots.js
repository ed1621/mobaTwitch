'use strict';

var app = angular.module('mobaTwitchApp');

app.controller('hotsController', function($scope, apiService){
  $scope.getGame = function(){
    $scope.streamInfo = [];
    apiService.getGame('heroes+of+the+storm').then(function(data){
      var twitchTest = data.data.streams;
      $scope.streamInfo = apiService.streamData(twitchTest);
    });
  };

    $scope.matches = apiService.getTournaments('hots');
});
