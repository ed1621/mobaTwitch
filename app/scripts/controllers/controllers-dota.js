'use strict';

var app = angular.module('mobaTwitchApp');

app.controller('dotaController', function($scope, dota){
  $scope.getGame = function(){
    dota.getGame().then(function(data){
      var twitchTest = data.data.streams;
      $scope.streamInfo = dota.streamData(twitchTest);
    });
  };
});
