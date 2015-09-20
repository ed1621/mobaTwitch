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
