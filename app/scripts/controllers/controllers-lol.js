'use strict';

var app = angular.module('mobaTwitchApp');

app.controller('lolController', function($scope, lol){
  $scope.getGame = function(){

    $scope.streamInfo = [];
    lol.getGame().then(function(data){
      $scope.twitchTest = data.data.streams;


//creating array of objects to dynamically generate streams
      for(var i = 0; i < $scope.twitchTest.length; i++){
        var streamStatus = data.data.streams[i];
        var streamTitle = data.data.streams[i].channel.status;
        if(streamTitle.length > 40){
          streamTitle = streamTitle.substring(0,37)+"...";
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
      console.log($scope.streamInfo);
    });
  };
});
