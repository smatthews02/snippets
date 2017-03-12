angular.module('App', [])
    .controller('Controller', function ($scope, $http, service) {
        $scope.text = 'This is a test of ngModel';

        $scope.buttonClick = function () {
            console.log('next button clicked');
        };

        service.setURL('designsbysm.com');
        console.log('app controller:', service.getURL());

        $http({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/users/'
        }).then(function (response) {
            //see if we have data
            if (response.status === 200) {
                $scope.users = response.data;
            }

        }).catch(function (response) {
            //have an error
            console.log(response);

        }).finally(function () {

        });
    });