
angular.module('controller', [])
.run(['$anchorScroll', function($anchorScroll) {
  $anchorScroll.yOffset = 50;   // always scroll by 50 extra pixels
}])
.controller('appCtrl', function ($scope, $state) {

})


.controller('homeCtrl', function ($scope, $state, factory,$anchorScroll,$location)
{
    /* ---------- var definition - We are sorry about scope------*/
    $scope.arrayMembers = [];
    $scope.arrayMembers = factory.getMembers();

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

    /*
        Clientes
    */
    $scope.clientes = factory.getClientes();

    /*
        Carrousel Productos
    */
    $scope.navbarCollapsedP = true;
    $scope.myIntervalP = 5000;
    $scope.noWrapSlidesP = false;
    $scope.activeP = 0;
    var slidesP = $scope.slidesP = [];
    var currIndexP = 0;

    /*
        Experience
    */
    $scope.skills = factory.getSkills();
    $scope.skillsPorcent = factory.getSkillsPorcent();

    /*
    Contact
    */
    $scope.success = false;
    $scope.error = false;
    $scope.user = {};

    $scope.hola = function (pancho) {
        console.log(pancho + ': ' + factory.panchoElTriste());
    }

    /* NavScroll*/
    $scope.gotoAnchor = function(x) {
      var newHash = 'homeSec' + x;
      if ($location.hash() !== newHash) {
        // set the $location.hash to `newHash` and
        // $anchorScroll will automatically scroll to it
        $location.hash('homeSec' + x);
      } else {
        // call $anchorScroll() explicitly,
        // since $location.hash hasn't changed
        $anchorScroll();
      }
    };

    $scope.addSlideP = function (dirWebItem) {
        var newWidthP = currIndexP + 1; //600 + slidesP.length + 1;

        slidesP.push({
            image: 'images/banner/banner' + newWidthP + '.png',
            text: ['Nice image', 'Awesome photograph', 'That is so cool', 'I love that'][slidesP.length % 4],
            id: currIndexP++,
            dirWeb: dirWebItem.dirWeb
        });
    };

    /*
        Carrousel Testimonios
    */
    for (var i = 0; i < testimonios.length; i++) {
        slides.push({
            nombre: testimonios[i].nombre,
            foto: testimonios[i].foto,
            cuerpo: testimonios[i].cuerpo,
            puesto: testimonios[i].puesto,
            linked: testimonios[i].linked,
            twitter: testimonios[i].twitter,
            id: currIndex++
        });
    }
    /*
        Carousel Productos
    */

    for (var i = 0; i < 4; i++)
    {
      var prodLive = factory.getArrayProducts();
        $scope.addSlideP(prodLive[i]);
    }
    $scope.send = function () {
        factoryBackend.sendToNodeMailer($scope.user);
  }

})
