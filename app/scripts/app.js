'use strict';

/**
* @ngdoc overview
* @name mobaTwitchApp
* @description
* # mobaTwitchApp
*
* Main module of the application.
*/
var app = angular.module('mobaTwitchApp', ['ui.router', 'firebase', 'angularjs.media.directives']);

app.constant('fb', {
  url: 'https://mobatwitch.firebaseio.com'
});

app.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/home');

  $stateProvider

  .state('home', {
    url: '/home',
    templateUrl: '../views/main.html',
  })

  .state('error', {
    url: '/error',
    templateUrl: '../404.html'
  })

  .state('games', {
    url: '/games',
    templateUrl: '../views/games.html',
  })


  .state('games.dota', {
    url: '/dota-2',
    templateUrl: '../views/streams.html',
    controller: 'dotaController'
  })

  .state('games.lol', {
    url: '/league-of-legends',
    templateUrl: '../views/streams.html',
    controller: 'lolController'
  })

  .state('games.hots', {
    url: '/heroes-of-the-storm',
    templateUrl: '../views/streams.html',
    controller: 'hotsController'
  })

  .state('games.cs', {
    url: '/counter-strike',
    templateUrl: '../views/streams.html',
    controller: 'csController'
  })

  .state('stream', {
    url: '/stream/:user',
    templateUrl: '../views/streamPlayer.html',
    controller: function($stateParams, $scope){
      $scope.username = $stateParams.user;
    }
  });
  
});
