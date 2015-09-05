'use strict';

var app = angular.module('mobaTwitchApp');

app.controller('dotaController', function($scope, apiService){
  $scope.getGame = function(){
    $scope.streamInfo = [];
    apiService.getGame('Dota+2').then(function(data){
      var twitchTest = data.data.streams;
      $scope.streamInfo = apiService.streamData(twitchTest);
    });
  };

    $scope.matches = apiService.getTournaments('dota2/tournaments');
});
