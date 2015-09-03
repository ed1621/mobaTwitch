'use strict';

angular.module('mobaTwitchApp')

.service('lol', function($http, $firebaseArray, fb){
  this.getGame = function(){
    var url = 'https://api.twitch.tv/kraken/streams?game=League+of+Legends&limit=30&offset=0&callback=JSON_CALLBACK';
    return  $http.jsonp(url);
  };

  this.streamData = function(variable){
    var streamInfo = [];
    for(var i = 0; i < variable.length; i++){
      var streamStatus = variable[i];
      var streamTitle = variable[i].channel.status;
      if(streamTitle.length > 20){
        streamTitle = streamTitle.substring(0,20)+"...";
      }
      streamInfo.push({
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
    return streamInfo;
  };

  this.getTournaments = function(){
    var ref = new Firebase(fb.url + '/lol');
    return $firebaseArray(ref);
  };
});
