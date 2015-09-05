'use strict';

var app = angular.module('mobaTwitchApp');

app.controller('csController', function($scope, apiService){
  $scope.getGame = function(){
    $scope.streamInfo = [];
    apiService.getGame('counter-strike:+global+offensive').then(function(data){
      var twitchTest = data.data.streams;
      $scope.streamInfo = apiService.streamData(twitchTest);
    });
  };

    $scope.matches = apiService.getTournaments();
});
