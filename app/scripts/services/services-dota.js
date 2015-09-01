'use strict';

angular.module('mobaTwitchApp')

  .service('dota', function($http){
    this.getGame = function(){
    var url = 'https://api.twitch.tv/kraken/streams?game=Dota+2&limit=100&offset=0&callback=JSON_CALLBACK';
     return  $http.jsonp(url);
    };
  });
