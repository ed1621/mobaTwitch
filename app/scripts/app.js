'use strict';

/**
* @ngdoc overview
* @name mobaTwitchApp
* @description
* # mobaTwitchApp
*
* Main module of the application.
*/
var app = angular.module('mobaTwitchApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){

  // $urlRouterProvider.otherwise('/home');

  $stateProvider

  .state('home', {
    url: '/home',
    templateUrl: '../views/main.html'
  })

  .state('error', {
    url: '/error',
    templateUrl: '../404.html'
  })

  .state('games', {
    url: '/games',
    templateUrl: '../views/games.html'
  })

  .state('games.dota', {
    url: '/dota',
    templateUrl: '../views/streams.html',
    controller: 'dotaController'
  })

  .state('games.lol', {
    url: '/lol',
    templateUrl: '../views/streams.html',
    controller: 'lolController'
  })

  .state('games.hots', {
    url: '/hots',
    templateUrl: '../views/streams.html',
    controller: 'lolController'
  })

  .state('games.hon', {
    url: '/hots',
    templateUrl: '../views/streams.html',
    controller: 'lolController'
  })

  .state('stream', {
    url: '/stream/:user',
    templateUrl: '../views/streamPlayer.html',
    controller: 'lolController'

  });
});
