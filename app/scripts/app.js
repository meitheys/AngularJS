var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){

    $routeProvider
    .when('/home', {
        templateUrl: 'views/home.html'
    })
    .when('/list', {
        //Que view queremos ver na URL
        templateUrl: 'views/list.html',
        //Que controller queremos usar na URL
        controller: 'Controller'
    })
    //Se não for pra alguma das anteriores, vai para home
    .otherwise({
        redirectTo: '/home'
    })

}]);

app.controller('Controller', function ($scope, $http) {

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

    $http({
        method: 'GET',
        url: 'app/data/ninjas.json'
    }).then(function successCallback(response) {
        $scope.ninjas = response.data;
    }, function errorCallback(response) {
        console.log('erro');
    });


    // $scope.ninjas = [
    //     {
    //         name: "Yoshi",
    //         belt: "Green",
    //         rate: 50,
    //         available: true,
    //         thumb: "content/img/icon.png"
    //     },
    //     {  
    //         name: "Crystal",
    //         belt: "Yellow",
    //         rate: 30,
    //         available: true,
    //         thumb: "content/img/icon.png"
    //     },
    //     {
    //         name: "Ryu",
    //         belt: "Orange",
    //         rate: 20,
    //         available: false,
    //         thumb: "content/img/icon.png"
    //     },
    //     {
    //         name: "Shaun",
    //         belt: "Black",
    //         rate: 1000,
    //         available: true,
    //         thumb: "content/img/icon.png"
    //     }
    // ];
});