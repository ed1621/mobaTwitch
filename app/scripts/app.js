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

    $urlRouterProvider.otherwise('/home');

    $stateProvider

      .state('home', {
        url: '/home',
        templateUrl: '../views/main.html'
      })

      .state('error', {
        url: '/error',
        templateUrl: '../404.html'
      })

      .state('dota', {
        url: '/dota',
        templateUrl: '../views/dota.html',
        controller: 'dotaController'
      })

      .state('lol', {
        url: '/lol',
        templateUrl: '../views/lol.html',
        controller: 'lolController'
      });
  });
