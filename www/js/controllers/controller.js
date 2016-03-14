angular.module('controller', [])

.controller('appCtrl', function ($scope, $state) {

})

.controller('homeCtrl', function ($scope, $state, factory) {
    $scope.arrayMembers = [];

    $scope.arrayMembers = factory.getMembers();

    $scope.hola = function(pancho){
        console.log(pancho+': '+factory.panchoElTriste());
    }

});
