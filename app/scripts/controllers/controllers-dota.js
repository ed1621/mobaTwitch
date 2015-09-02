'use strict';

var app = angular.module('mobaTwitchApp');

app.controller('dotaController', function($scope, dota){
  $scope.getGame = function(){

    $scope.streamInfo = [];
    dota.getGame().then(function(data){
      $scope.twitchTest = data.data.streams;


//creating array of objects to dynamically generate streams
      for(var i = 0; i < $scope.twitchTest.length; i++){
        var streamStatus = data.data.streams[i];
        var streamTitle = data.data.streams[i].channel.status;
        if(streamTitle.length > 20){
          streamTitle = streamTitle.substring(0,20)+"...";
        }
        $scope.streamInfo.push({
          title: streamTitle,
          preview: {
            small: streamStatus.preview.small,
            medium: streamStatus.preview.medium
          },
          viewers: streamStatus.viewers,
          url: streamStatus.channel.url,
          display_name: streamStatus.channel.display_name
        });
      }
    });
  };
});
