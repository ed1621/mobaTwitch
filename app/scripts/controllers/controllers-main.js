'use strict';

var app = angular.module('mobaTwitchApp');

app.controller('mainPageController', function($scope, userService){

  $scope.loginWithFacebook = function(){
    userService.loginWithFacebook();
  };


  $scope.loginWithGoogle = function(){
    userService.loginWithGoogle();
  };

  $scope.logout = function(){
    userService.logout();
  };

});
