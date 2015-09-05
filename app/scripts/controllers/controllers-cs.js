'use strict';

var app = angular.module('mobaTwitchApp');

app.controller('csController', function($scope, apiService){
  $scope.getGame = function(){
    apiService.getGame('counter-strike:+global+offensive').then(function(data){
      var twitchTest = data.data.streams;
      $scope.streamInfo = apiService.streamData(twitchTest);
    });
  };
    $scope.usernames = function(){
      apiService.getGame('counter-strike:+global+offensive').then(function(data){
        var twitchTest = data.data.streams.channel;
        $scope.streamInfo = apiService.streamData(twitchTest);
        console.log($scope.streamInfo);
    });
  };
    $scope.matches = apiService.getTournaments('cs');

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

        // $scope.teams = ''; //Clear the text in the input box
        // $scope.times = ''; //Same
        // $scope.date = ''; //ditto
    };
});
