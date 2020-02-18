var app = angular.module('myApp', []);

app.controller('Controller', function ($scope) {

    $scope.removeNinja = function (ninja) {
        var removedNinja = $scope.ninjas.indexOf(ninja)
        //The '1' specifie to remove just one element on the array
        $scope.ninjas.splice(removedNinja, 1);
    }

    $scope.addNinja = function(){
        $scope.ninjas.push({
            name: $scope.newninja.name,
            belt: $scope.newninja.belt,
            rate: parseInt($scope.newninja.rate),
            available: true
        })

        $scope.newninja.name = "";
        $scope.newninja.belt = "";
        $scope.newninja.rate = "";

    };

    $scope.ninjas = [
        {
            name: "Yoshi",
            belt: "Green",
            rate: 50,
            available: true,
            thumb: "content/img/icon.png"
        },
        {
            name: "Crystal",
            belt: "Yellow",
            rate: 30,
            available: true,
            thumb: "content/img/icon.png"
        },
        {
            name: "Ryu",
            belt: "Orange",
            rate: 20,
            available: false,
            thumb: "content/img/icon.png"
        },
        {
            name: "Shaun",
            belt: "Black",
            rate: 1000,
            available: true,
            thumb: "content/img/icon.png"
        }
    ];
});