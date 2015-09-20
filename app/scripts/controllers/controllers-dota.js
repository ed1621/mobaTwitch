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

    $scope.addThread = function(){
        if(!$scope.teams){
            return false; //Don't do anything if the text box is empty
        }
        console.log('hello!');
        var newThread = {
            teams: $scope.teams,
            time: $scope.times + ' MST',
            date: $scope.date
        };

        $scope.matches.$add(newThread);

        $scope.teams = ''; //Clear the text in the input box
        $scope.times = ''; //Same
        $scope.date = ''; //ditto
    };
});
