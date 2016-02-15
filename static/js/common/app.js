/**
 * Created by shenzp on 2016/01/05.
 */
angular.module('angularWidgetApp', [
    'ui.bootstrap',
    'ngAnimate',
    'ngRoute',
    'route',
    'chart.js',
    'ui.ace',
    'ui.date',
    'ui.sortable',
    'ui.tour',

    'angularChartModule',
    'UIBootstrapModule',
    'UIAceModule',
    'DatePickerModule',
    'BaiduMapModule',
    'sortableModule',
    'UITourModule'
]).config(function () {

}).controller('appCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

}]);