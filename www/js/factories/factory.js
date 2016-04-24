angular.module('factories', [])

.factory('factory', function () {
    var comun = {};
    var arrayProducts = [
        {
          dirWeb: 'views/products/chaplist.html'        },
        {
          dirWeb: 'views/products/tutosite.html'
        },
        {
          dirWeb: 'views/products/chaplist.html'
        },
        {
          dirWeb: 'views/products/tutosite.html'
        }
      ];
    var array = [
        {
            nombre: 'Jose',
            apellido: 'Estrada'
        },
        {
            nombre: 'Jeyson',
            apellido: 'Montenegro'
        },
        {
            nombre: 'Jere',
            apellido: 'Ortega'
        },
        {
            nombre: 'Francisco',
            apellido: 'Ardón'
        },
        {
            nombre: 'Keneth',
            apellido: 'Ubeda'
        },
        {
            nombre: 'Tamy',
            apellido: 'Vivas'
        }
    ];
    var arraySkills = [
        {
            name: 'Android',
            description: 'Desarrollamos Apps hibridas y nativas, con la mas recientes tecnologías de desarrollo y diseño.',
            icon: 'https://cdn1.iconfinder.com/data/icons/simple-icons/4096/android-4096-black.png'
        },
        {
            name: 'SailsJS',
            description: 'Utilizamos Frameworks para desarrollar las soluciones. Esto nos permite dar una solucion integral, mejorable, mantenible y optima.',
            icon: 'https://cdn.tutsplus.com/net/uploads/2013/06/sails-preview-400-2.jpg'
        },
        {
            name: 'IT',
            description: 'Prestamos servicios de la tecnologia de la informacion para administrar su empresa, manteniendola a la vanguardia y al ritmo del cambio tecnologico.',
            icon: 'http://edelitconsult.com/wp-content/uploads/2013/12/it-consulting-solutions-w600h400.jpg'
        }
    ];
    var arraySkillsPorcent = [
        {
            name: 'Android',
            value: 80
        },
        {
            name: 'SailsJS',
            value: 70
        },
        {
            name: 'IT',
            value: 90
        }
    ];
    var clientes = [
        {
            nombre: 'ChapList',
            logo: 'images/chaplist/icon.png '
    }, {
            nombre: 'TutoSite',
            logo: 'images/tutosite/Logo.png'
    }
                   ];

    var testimonios = [
        {
            nombre: 'Jose Estrada',
            puesto: 'Desarrollador',
            foto: 'images/Esvin.jpg',
            linked: 'https://www.facebook.com/esvin.jose.estrada',
            cuerpo: 'Muy Buena experiencia, es exelente, adios mucho gusto',
            id: ''
    }, {
            nombre: 'TAmy Vivas',
            puesto: 'Desarrollador',
            linked: 'https://www.facebook.com/tamyg.vivas',
            foto: 'https://yt3.ggpht.com/-SnGuBQR3Dt0/AAAAAAAAAAI/AAAAAAAAAAA/0Rk1XvDEjUM/s100-c-k-no/photo.jpg',
            cuerpo: 'Muy Buena experiencia, me parecen exelentes apps',
            id: ''
    }, {
            nombre: 'Jeyson Montenegro',
            puesto: 'Desarrollador',
            linked: 'https://www.facebook.com/MrJeyson',
            foto: 'images/Jeyson.png',
            cuerpo: 'Muy Buen trabajo departe de los muchachos!',
            id: ''
    }, {
            nombre: 'Jeremias Ortega',
            puesto: 'Desarrollador',
            linked: 'http://facebook.com/momero2424',
            foto: 'images/Jeremias.png',
            cuerpo: 'Excelente!!!!!!!',
            id: ''
    }, {
            nombre: 'Francisco Ardon',
            puesto: 'Desarrollador',
            linked: 'https://www.facebook.com/franciscorene.ardonguerra',
            foto: 'images/Francisco.png',
            cuerpo: 'Generando buenas ideas!!!!',
            id: ''
    }, {
            nombre: 'Keneth Ubeda',
            puesto: 'Desarrollador',
            linked: '',
            foto: 'images/Keneth.png',
            cuerpo: 'Generando buenas ideas!!!!',
            id: ''
      }, {
            nombre: 'Abel Gutierrez',
            puesto: 'Desarrollador',
            linked: '',
            foto: 'images/Abel.jpg',
            cuerpo: 'Generando buenas ideas!!!!',
            id: ''
      }, {
            nombre: 'Fernando Samayoa',
            puesto: 'Desarrollador',
            linked: '',
            foto: 'images/Fernando.jpg',
            cuerpo: 'Generando buenas ideas!!!!',
            id: ''
      }
      ];



    comun.panchoElTriste = function () {
        return 'estoy triste';
    }

    comun.getMembers = function () {
        return array;
    }

    comun.getClientes = function () {
        return clientes;
    }

    comun.getTestimonios = function () {
        return testimonios;
    }
    comun.getSkills = function () {
        return arraySkills;
    }
    comun.getSkillsPorcent = function () {
        return arraySkillsPorcent;
    }
    comun.getArrayProducts = function () {
        return arrayProducts;
    }
    return comun
})

.factory('factoryBackend', function ($http) {
    var comun = {};

    comun.sendToNodeMailer = function (body) {
        return $http.post('http://oktacore.com/email', body)
            .then(function (res) {
                alert('Email enviado:');
                return res;
            }, function (err) {
                alert('Error al enviar email');
                return err;
            });
    }
    return comun;
});
