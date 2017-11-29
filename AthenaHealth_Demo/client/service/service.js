/**
 * Created by thinesh.babu on 11/29/2017.
 */
angular.module('AthenaHealthDemoApp').factory('DemoService', function($http) {
    var demoService = {};
    var version = ['/1.0'];
    var endPoint = version[0] + '/home';

    demoService.getJson = function () {
        return $http.get(endPoint);
    };
    return demoService;
});