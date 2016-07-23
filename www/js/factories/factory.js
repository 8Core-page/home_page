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
          },
          {
            nombre: 'TutoSite',
            logo: 'images/tutosite/Logo.png'
          },
          {
            nombre: 'Revista Lapiz y Papel',
            logo: 'http://lapizypapelgt.com/wp-content/uploads/2016/04/fondo1-768x768.jpg'
          },
          {
            nombre: 'La Torre Supermercados',
            logo: 'images/clientes/latorre.png'
          },
          {
            nombre: 'Econo super',
            logo: 'images/clientes/econosuper.jpg'
          }
        ];

    var testimonios = [
        {
            nombre: 'Jose Estrada',
            puesto: 'Desarrollador',
            foto: 'images/team/Esvin.jpg',
            linked: 'https://www.facebook.com/esvin.jose.estrada',
            twitter: 'https://twitter.com/estrada_esvin',
            cuerpo: 'Muy Buena experiencia, Aprendizaje al maximo',
            id: ''
    }, {
            nombre: 'TAmy Vivas',
            puesto: 'Desarrollador',
            linked: 'https://www.facebook.com/tamyg.vivas',
            twitter: '',
            foto: 'https://yt3.ggpht.com/-SnGuBQR3Dt0/AAAAAAAAAAI/AAAAAAAAAAA/0Rk1XvDEjUM/s100-c-k-no/photo.jpg',
            cuerpo: 'Desarrollo exitoso, productos de alta Calidad',
            id: ''
    }, {
            nombre: 'Jeyson Montenegro',
            puesto: 'Desarrollador',
            linked: 'https://www.facebook.com/MrJeyson',
            twitter: '',
            foto: 'images/team/Jeyson.jpg',
            cuerpo: 'Es un equipo dedicado y entregado!',
            id: ''
    }, {
            nombre: 'Jeremias Ortega',
            puesto: 'Desarrollador',
            linked: 'http://facebook.com/momero2424',
            twitter: '',
            foto: 'images/team/Jeremias.jpg',
            cuerpo: 'Excelente interaccion del equipo!!',
            id: ''
    }, {
            nombre: 'Francisco Ardon',
            puesto: 'Desarrollador',
            linked: 'https://www.facebook.com/franciscorene.ardonguerra',
            twitter: '',
            foto: 'images/team/Francisco.jpg',
            cuerpo: 'Fidelizacion del cliente al 100%!!',
            id: ''
    }, {
            nombre: 'Keneth Ubeda',
            puesto: 'Desarrollador',
            linked: '',
            twitter: '',
            foto: 'images/team/Keneth.jpg',
            cuerpo: 'Generando ideas, innovacion en sus productos!',
            id: ''
      }, {
            nombre: 'Abel Gutierrez',
            puesto: 'Desarrollador',
            linked: 'https://www.facebook.com/vegetalink',
            twitter: '',
            foto: 'images/team/Abel.jpg',
            cuerpo: 'Retroalimentacion del cliente, Soporte constante!',
            id: ''
      }, {
            nombre: 'Fernando Samayoa',
            puesto: 'Desarrollador',
            linked: 'https://www.facebook.com/fernando.samayoa',
            twitter: 'https://twitter.com/You_ReadThis',
            foto: 'images/team/Fernando.jpg',
            cuerpo: 'Deadlines cumplidos, producto testeado y deployado!',
            id: ''
      }, {
            nombre: 'Eiji De Paz',
            puesto: 'Desarrollador',
            linked: 'https://www.facebook.com/eiji.depazperez',
            twitter: '',
            foto: 'images/team/Eiji.jpg',
            cuerpo: 'Calidad profesional y de sus productos.',
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
