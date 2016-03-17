angular.module('controller', [])

.controller('appCtrl', function ($scope, $state) {

})

.controller('homeCtrl', function ($scope, $state, factory) {
    $scope.arrayMembers = [];

    $scope.arrayMembers = factory.getMembers();

    $scope.hola = function (pancho) {
        console.log(pancho + ': ' + factory.panchoElTriste());
    }
    $scope.navbarCollapsed = true;
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;

    $scope.addSlide = function () {
        var newWidth = 600 + slides.length + 1;
        slides.push({
            image: 'http://lorempixel.com/' + newWidth + '/300',
            text: ['Nice image', 'Awesome photograph', 'That is so cool', 'I love that'][slides.length % 4],
            id: currIndex++
        });
    };


    for (var i = 0; i < 4; i++) {
        $scope.addSlide();
    }
    /*------------------------ Carrousel Productos --------------------*/
      $scope.theInterval = 3000;
      $scope.isActive = 0;
      currIndex = 0;
      var photos = $scope.photos =[
        {
          image: 'http://lorempixel.com/400/200/'
        },
        {
          image: 'http://lorempixel.com/400/200/food'
        },
        {
          image: 'http://lorempixel.com/400/200/sports'
        },
        {
          image: 'http://lorempixel.com/400/200/people'
        }
      ];

})
