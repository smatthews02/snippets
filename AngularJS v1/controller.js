angular.module('App', [])
    .controller('Controller', function ($scope, $location, $log) {

        //setup local dev environment
        //$scope.debugMode = ($location.host() === 'localhost');
        //var log = $log.getInstance('init');
        //log.debug('angular running');

        $scope.selectfocus = true;

        $scope.text = 'This is a test of ngModel';
        $scope.currentUser = {
            username: 'Scott'
        };

        $scope.buttonClick = function () {
            log.debug('next button clicked');
        };

        $scope.updateSelect = function () {
            log.debug('new select value:', $scope.select);
        };

        $scope.loseFocus = function () {
            log.debug('lost focus');
        };
    });