angular.module('controller', [])

.controller('appCtrl', function ($scope, $state) {

})

.controller('homeCtrl', function ($scope, $state, factory) {
    $scope.arrayMembers = [];

    $scope.arrayMembers = factory.getMembers();

    $scope.hola = function (pancho) {
        console.log(pancho + ': ' + factory.panchoElTriste());
    }

    /*
        Carrousel Testimonios
    */
    $scope.navbarCollapsed = true;
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;
    var testimonios = factory.getTestimonios();

    for (var i = 0; i < testimonios.length; i++) {
        slides.push({
            color: testimonios[i].color,
            nombre: testimonios[i].nombre,
            foto: testimonios[i].foto,
            cuerpo: testimonios[i].cuerpo,
            id: currIndex++
        });
    }
    /*
        Carrousel Testimonios
    */

    /*
        Clientes
    */
    $scope.clientes = factory.getClientes();
    /*
    Clientes
    */

    /*------------------------ Carrousel Productos --------------------*/
    $scope.navbarCollapsedP = true;
    $scope.myIntervalP = 5000;
    $scope.noWrapSlidesP = false;
    $scope.activeP = 0;
    var slidesP = $scope.slidesP = [];
    var currIndexP = 0;

    $scope.addSlideP = function () {
        var newWidthP = 600 + slidesP.length + 1;
        slidesP.push({
            image: 'http://lorempixel.com/' + newWidthP + '/300',
            text: ['Nice image', 'Awesome photograph', 'That is so cool', 'I love that'][slidesP.length % 4],
            id: currIndexP++
        });
    };


    for (var i = 0; i < 4; i++) {
        $scope.addSlideP();
    }

})
