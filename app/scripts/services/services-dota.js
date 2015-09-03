'use strict';

angular.module('mobaTwitchApp')

.service('dota', function($http, $firebaseArray, fb){
  this.getGame = function(){
    var url = 'https://api.twitch.tv/kraken/streams?game=Dota+2&limit=30&offset=0&callback=JSON_CALLBACK';
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
          medium: streamStatus.preview.medium,
          template: streamStatus.preview.template
        },
        viewers: streamStatus.viewers,
        url: streamStatus.channel.url,
        display_name: streamStatus.channel.display_name
      });
    }
    return streamInfo;
  };

  this.getTournaments = function(){
    var ref = new Firebase(fb.url + '/dota2/tournaments');
    return $firebaseArray(ref);
  };

});
