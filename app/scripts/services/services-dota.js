'use strict';

angular.module('mobaTwitchApp')

  .service('dota', function($http){
    this.getGame = function(){
      return $http.jsonp('https://api.twitch.tv/kraken/streams?game=Dota%202&callback=JSON_CALLBACK');
    };
  });
