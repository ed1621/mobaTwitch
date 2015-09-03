'use strict';

var app = angular.module('mobaTwitchApp');

app.controller('csController', function($scope, cs){
  $scope.getGame = function(){
    cs.getGame().then(function(data){
      var twitchTest = data.data.streams;
      $scope.streamInfo = cs.streamData(twitchTest);
    });
  };
});
