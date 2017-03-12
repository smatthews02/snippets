angular.module('App')
    .service('service', function () {
        /** public members */
        var Service = function (url) {
            this.url = url;
        };

        /** public methods */
        Service.prototype.setURL = function (url) {
            this.url = url;
        };

        Service.prototype.getURL = function () {
            return this.url;
        };

        return new Service;
    });
