/**
 * Created by thinesh.babu on 11/28/2017.
 */


angular.module('AthenaHealthDemoApp').controller('HomeController', ['DemoService', '$scope', '$log', '$q', '$http', '$timeout', function(DemoService, $scope, $log, $q, $http, $timeout) {

    $scope.jsonList = undefined;

    $scope.getData = function() {
        var deferred = $q.defer();
        DemoService.getJson().then(function successCallback(jsonData) {
            if(jsonData) {
                $scope.jsonList = jsonData.data;
                $scope.gridOptions.data = $scope.jsonList
            }
            deferred.resolve(jsonData);
        }, function errorCallback(error) {
            deferred.reject(error);
        });
        return deferred.promise;
    };

    $scope.getData();

    $scope.gridOptions = {
        enableFiltering: true,
        paginationPageSizes: [10, 25, 50, 100, 500],
        paginationPageSize: 30,
        data: $scope.jsonList,
        columnDefs: [{field: 'id', displayName: 'Id', width: '7%', enableGrouping: false},
            {field: 'txnt id', displayName: 'Txn id', width: '7%', enableGrouping: false},
            {field: 'username', displayName: 'User name', width: '10%'},
            {field: 'product zone', displayName: 'Product Zone', width: '15%'},
            {field: 'product', displayName: 'Product'},
            {field: 'brand', displayName: 'Brand', enableGrouping: false},
            {field: 'model', displayName: 'Model', enableGrouping: false},
            {field: 'date time', displayName: 'DateTime', width: '17%', enableGrouping: false},
            {field: 'quantity', displayName: 'Quantity', enableGrouping: false},
            {field: 'amount', displayName: 'Amount',width: '10%', enableGrouping: false}
        ]
    };
}]);