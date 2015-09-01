'use strict';

var app = angular.module('mobaTwitchApp');

app.controller('dotaController', function($scope, dota){
  $scope.test = 'hello World';

  $scope.getGame = function(){
    dota.getGame().then(function(data){
      $scope.twitchTest = data.data.streams;
      console.log($scope.twitchTest.channel);
    });
  };
});
