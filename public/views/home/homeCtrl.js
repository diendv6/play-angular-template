'use strict';
angular.module('hiApp').controller('homeCtrl', ['$rootScope', function($rootScope){
	$rootScope.titlePage = 'Home Page';
	console.log($rootScope.titlePage);
}]);