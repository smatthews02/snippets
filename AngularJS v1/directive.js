angular.module('App')
    .directive('ngFocus', function ($timeout, $log) {
    return {
        link: function (scope, element, attrs) {
            //var log = $log.getInstance('ng-focus');

            $('body').on('selectchanged', function(event) {
                //log.debug('selectchanged');

                //log.debug(element);
                //$(element).next('input').focus();

                var focused = $(':focus');
                //log.debug($(':focus'));
                //'log.debug($(':focus').next('input'));

                //$(focused).nextAll('input').first().focus();
                var next = $(':focus').next();

                //log.debug(focused);
                //log.debug(next);

                //$(':focus').next('input,textarea,select').filter(':visible').focus();


            });

        }
    };
});

//app.directive('ngFocus', function ($timeout, $log) {
//    return {
//        link: function (scope, element, attrs) {
//            var log = $log.getInstance('ng-focus');
//            log.debug('testing focus');
//
//            //perform focus function
//            scope.$watch(attrs.ngFocus, function (value) {
//                if (angular.isDefined(value) && value) {
//                    $timeout(function () {
//                        element[0].focus();
//                    });
//                }
//            }, true);
//
//            //call lost focus function
//            element.bind('blur', function () {
//                if (angular.isDefined(attrs.ngFocusLost)) {
//                    scope.$apply(attrs.ngFocusLost);
//                }
//            });
//        }
//    };
//});
