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

    $scope.addSlideP = function (dirWeb) {
        var newWidthP = currIndexP + 1; //600 + slidesP.length + 1;

        slidesP.push({
            image: 'images/banner/banner' + newWidthP + '.png',
            text: ['Nice image', 'Awesome photograph', 'That is so cool', 'I love that'][slidesP.length % 4],
            id: currIndexP++,
            dirWeb: dirWeb
        });
    };

    for (var i = 0; i < 4; i++)
    {
      var prodLive = factory.getArrayProducts();
        $scope.addSlideP(prodLive[i]);
    }
})

.controller('experienceCtrl', function ($scope, $state, factory) {
    $scope.skills = factory.getSkills();
    $scope.skillsPorcent = factory.getSkillsPorcent();
})

.controller('contactCtrl',function ($scope, factoryBackend) {
    $scope.success = false;
    $scope.error = false;
    $scope.user = {};
    $scope.send = function () {
        factoryBackend.sendToNodeMailer($scope.user);
  }
})
