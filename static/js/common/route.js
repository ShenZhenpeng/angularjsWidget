/**
 * Created by shenzp on 2016/01/05.
 */
angular.module('route', ['ngRoute'])
	.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {

		$routeProvider.when('/chart', {
			templateUrl: 'templates/angular-chart.html',
			controller: 'angularChartCtrl'
		}).when('/uibootstrap', {
			templateUrl: 'templates/UIBootstrap.html',
			controller: 'UIBootstrapCtrl'
		}).when('/ui.ace', {
			templateUrl: 'templates/UIAce.html',
			controller: 'UIAceCtrl'
		})
			.otherwise({
				redirectTo: '/chart'
			})
	}]);