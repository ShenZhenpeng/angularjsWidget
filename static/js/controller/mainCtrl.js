/**
 * Created by shenzp on 2016/2/15.
 */
angular.module('mainModule',[])
    .controller('mainCtrl', ['$scope', function ($scope) {
        var ASBaseUrl = "http://mgcrea.github.io/angular-strap/";
        $scope.AnrularStrapList = [
            { name: "Model", url: ASBaseUrl + "#modals" },
            { name: "Aside", url: ASBaseUrl + "#asides" },
            { name: "Alert", url: ASBaseUrl + "#alerts" },
            { name: "Tooltip", url: ASBaseUrl + "#tooltips" },
            { name: "Popover", url: ASBaseUrl + "#popovers" },
            { name: "Typeahead", url: ASBaseUrl + "#typeaheads" },
            { name: "Datepicker", url: ASBaseUrl + "#datepickers" },
            { name: "Timepicker", url: ASBaseUrl + "#timepickers" },
            { name: "Button", url: ASBaseUrl + "#buttons" },
            { name: "Select", url: ASBaseUrl + "#selects" },
            { name: "Tab", url: ASBaseUrl + "#tabs" },
            { name: "Collapse", url: ASBaseUrl + "#collapses" },
            { name: "Dropdown", url: ASBaseUrl + "#dropdowns" },
            { name: "Navbar", url: ASBaseUrl + "#navbars" },
            { name: "Scrollspy", url: ASBaseUrl + "#scrollspy" },
            { name: "Affix", url: ASBaseUrl + "#affix" }
        ];
    }]);