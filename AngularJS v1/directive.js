angular.module('App')
    .directive('directive', function () {
    return {
         scope: {
             info: '@'
         },
        replace: true,
        template: '<div class="directive">This is a test directive</div>',
        //templateURL: 'directive.html',
        controller: function ($scope, service) {
            console.log('directive: controller', $scope.info, service.getURL());
        },
        link: function (scope, element, attrs) {
            console.log('directive: link', scope.info)
        }
    };
});