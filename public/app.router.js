'use strict';
angular.module('hiApp').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');
	$stateProvider
		.state('home',{
			url:'/home',
			templateUrl: 'views/home/home.html',
			controller: 'homeCtrl'
		})
		.state('signin',{
			url:'/signin',
			templateUrl:'views/signin/signin.html',
			controller:'signinCtrl'
		})
}]);