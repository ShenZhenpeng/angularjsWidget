/**
 * Created by shenzp on 2016/1/18.
 */
angular.module('angularChartModule',[])
    .controller('angularChartCtrl', ['$scope', function ($scope) {
        /**
         * .chart-line
         chart-data: series data
         chart-labels: x axis labels
         chart-legend (default: false): show legend below the chart
         chart-options (default: {}): Chart.js options
         chart-series (default: []): series labels
         chart-click (optional): onclick event handler
         chart-hover (optional): onmousemove event handler
         chart-colours (default to global colours): colours for the chart
         * @type {string[]}
         */
        $scope.labelsLine = ["January", "February", "March", "April", "May", "June", "July"];
        $scope.seriesLine = ['Series A', 'Series B'];
        $scope.dataLine = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];
        $scope.lineClick = function (points, evt) {
            console.log(points, evt);
        };

        /**
         * .chart-bar
         chart-data: series data
         chart-labels: x axis labels
         chart-legend (default: false): show legend below the chart
         chart-options (default: {}): Chart.js options
         chart-series (default: []): series labels
         chart-click (optional): onclick event handler
         chart-hover (optional): onmousemove event handler
         chart-colours (default to global colours): colours for the chart
         * @type {string[]}
         */
        $scope.labelsBar = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        $scope.seriesBar = ['Series A', 'Series B'];

        $scope.dataBar = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];


        /**
         * .chart-doughnut
         chart-data: series data
         chart-labels: series labels
         chart-legend (default: false): show legend below the chart
         chart-options (default: {}): Chart.js options
         chart-click (optional): onclick event handler
         chart-hover (optional): onmousemove event handler
         chart-colours (default to global colours): colours for the chart
         * @type {string[]}
         */
        $scope.labelsDoughnut = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
        $scope.dataDoughnut = [300, 500, 100];

        /**
         * .chart-radar
         chart-data: series data
         chart-labels: series labels
         chart-legend (default: false): show legend below the chart
         chart-options (default: {}): Chart.js options
         chart-series (default: []): series labels
         chart-click (optional): onclick event handler
         chart-hover (optional): onmousemove event handler
         chart-colours (default to global colours): colours for the chart
         * @type {string[]}
         */
        $scope.labelsRadar =["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];
        $scope.dataRadar = [
            [65, 59, 90, 81, 56, 55, 40],
            [28, 48, 40, 19, 96, 27, 100]
        ];

        /**
         * .chart-pie
         chart-data: series data
         chart-labels: series labels
         chart-legend (default: false): show legend below the chart
         chart-options (default: {}): Chart.js options
         chart-click (optional): onclick event handler
         chart-hover (optional): onmousemove event handler
         chart-colours (default to global colours): colours for the chart
         * @type {string[]}
         */
        $scope.labelsPie = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
        $scope.dataPie = [300, 500, 100];

        /**
         * .chart-polar-area
         chart-data: series data
         chart-labels: series labels
         chart-legend (default: false): show legend below the chart
         chart-options (default: {}): Chart.js options
         chart-click (optional): onclick event handler
         chart-hover (optional): onmousemove event handler
         chart-colours (default to global colours): colours for the chart
         * @type {string[]}
         */
        $scope.labelsPolarArea = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"];
        $scope.dataPolarArea = [300, 500, 100, 40, 120];


        /**
         * .chart-base
         chart-type: chart type e.g. Bar, PolarArea, etc. or other plugins
         other options according to chart type
         * @type {string[]}
         */
        $scope.labelsBase = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"];
        $scope.dataBase = [300, 500, 100, 40, 120];
        $scope.type = 'PolarArea';

        $scope.toggle = function () {
            $scope.type = $scope.type === 'PolarArea' ?
                'Pie' : 'PolarArea';
        };

    }]);