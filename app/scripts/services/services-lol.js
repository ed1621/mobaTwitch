'use strict';

angular.module('mobaTwitchApp')

  .service('lol', function($http){
    this.getGame = function(){
    var url = 'https://api.twitch.tv/kraken/streams?game=League+of+Legends&limit=100&offset=0&callback=JSON_CALLBACK';
     return  $http.jsonp(url);
    };
  });
