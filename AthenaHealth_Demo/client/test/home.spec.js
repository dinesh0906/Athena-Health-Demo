/**
 * Created by thinesh.babu on 11/29/2017.
 */
describe('TestingHomeController', function () {
    var controller;
    var scope;
    var rootScope = {};
    var mockService = {};
    var mockPromise;
    var filter;

    var mock_json = {"status": 200, "data": [{
        "id": "0",
        "txnt id": "10",
        "username": "username0",
        "product zone": "sporting goods",
        "product": "watches",
        "brand": "mkyuc",
        "model": "TUSC5",
        "date time": "10/11/2017 10::11::56 AM",
        "quantity": "10",
        "amount": "9448"
    },
    {
        "id": "1",
        "txnt id": "11",
        "username": "username1",
        "product zone": "Electronics",
        "product": "camera",
        "brand": "piotw",
        "model": "OHZFO",
        "date time": "30/11/2017 02::12::34 PM",
        "quantity": "4",
        "amount": "5455"
    },
    {
        "id": "2",
        "txnt id": "12",
        "username": "username2",
        "product zone": "Collectibles and art",
        "product": "watches",
        "brand": "hdaul",
        "model": "LEB5F",
        "date time": "10/11/2017 10::11::56 AM",
        "quantity": "7",
        "amount": "6137"
    }]};

    beforeEach(function () {
        module('AthenaHealthDemoApp', function ($provide) {
            $provide.service('DemoService', function () {
                return mockService;
            });
        });

        inject(function ($injector, $controller, $rootScope, $q, $filter) {
            scope = $rootScope.$new();
            filter = $filter;
            mockService.getData = function() {
                mockPromise = $q.defer();
                return mockPromise.promise;
            };
        });
    });

    describe('Validate get json data', function() {
        it('Should fetch all json data and populate grid', function () {
            scope.getData();
            mockPromise.resolve(mock_json);
            scope.$apply();
            expect(scope.jsonList[0].id).toBe(0);
            expect(scope.jsonList[1].username).toBe("username0");
            expect(scope.jsonList.data.length).toBe(2);
        });
    });

});