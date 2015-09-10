'use strict';

var app = angular.module('mobaTwitchApp');

app.controller('lolController', function($scope, $sce, apiService){
  $scope.username = 'ljhabsdv';

  $scope.getGame = function(){

    //getting object from service
    apiService.getGame('League+of+Legends').then(function(data){
      var twitchTest = data.data.streams;
      $scope.streamInfo = apiService.streamData(twitchTest);
    });
  };
    //getting info from firebase for tournament sidebar
    $scope.matches = apiService.getTournaments('lol');
});
