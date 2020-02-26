(function () {

    angular.module('app')
        .factory('bookLoggerInterceptor',['$q', '$log', bookLoggerInterceptor]);
        
    function bookLoggerInterceptor($q, $log) {

        return {
            request: requestInterceptor,
            responseError: responseErrorInterceptor
            
            //requestError
            //response

        };

        function requestInterceptor(config) {

            $log.debug('HTTP' + config.method + ' request - ' + config.url);
            return config;

        }

        function responseErrorInterceptor(response) {
            $log.debug(' HTTP ' + response.config.method + ' response error - ' + response.config);
            return $q.reject(response);
        }
    }
}());