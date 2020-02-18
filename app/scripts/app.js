var app = angular.module('myApp', []);

app.controller('Controller', function ($scope) {

$scope.removeNinja = function(ninja){
    var removedNinja = $scope.ninjas.indexOf(ninja)
    //The '1' specifie to remove just one element on the array
    $scope.ninjas.splice(removedNinja, 1);
}

    $scope.ninjas = [
        {
            name: "Yoshi",
            belt:   "Green",
            rate: 50,
            available: true
        },
        {
            name: "Crystal",
            belt: "Yellow",
            rate: 30,
            available: true
        },
        {
            name: "Ryu",
            belt: "Orange",
            rate: 20,
            available: false
        },
        {
            name: "Shaun",
            belt: "Black",
            rate: 1000,
            available: true
        }
    ];
});