'use strict';

var app = angular.module('mobaTwitchApp');

app.service('userService', function($location, $firebaseAuth, $q, fb){
  var user = {
    name: ''
  };
  var ref = new Firebase(fb.url);
  var authObj = $firebaseAuth(ref);

  this.loginWithFacebook = function(){
    authObj.$authWithOAuthPopup("facebook").then(function(authData) {
      $location.path('games');
      user.name = authData.facebook.displayName;
      console.log("Authenticated successfully with payload:", authData);
      return user.name;
    }).catch(function(error){
      console.log("Login Failed!", error);
    });
  };

  this.loginWithGoogle = function(){
    authObj.$authWithOAuthPopup("google").then(function(authData) {
        $location.path('games');
        user.name = authData.google.displayName;
        console.log("Authenticated successfully with payload:", authData);
        return user.name;
      }).catch(function(error){
        console.log("Login Failed!", error);
      });
    };

  this.logout = function(){
    authObj.$unauth();
    $location.path('login');
  };
});
