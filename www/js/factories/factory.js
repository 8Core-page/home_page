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
          dirWeb: 'views/products/chaplist.html'
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
            description: 'Desarrollamos Apps hibridas y nativas con la mas reciente tecnologia de desarrollo y diseño.',
            icon: 'https://cdn1.iconfinder.com/data/icons/simple-icons/4096/android-4096-black.png'
        },
        {
            name: 'SailsJS',
            description: 'Utilizamos Frameworks para desarrollar las soluciones. Esto nos permite dar una solucion integral y optima.',
            icon: 'https://cdn.tutsplus.com/net/uploads/2013/06/sails-preview-400-2.jpg'
        },
        {
            name: 'IT',
            description: 'Presatmos servico de la tecnologia de la informacion para mantener su empresa al dia y al ritmo del cambio tecnologico.',
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
            nombre: 'Miel Estrada',
            logo: 'http://previews.123rf.com/images/didora/didora1409/didora140900543/32021099-abeja-de-la-miel-y-el-panal-de-miel-icono-de-dise-o-plano-Foto-de-archivo.jpg'
    }, {
            nombre: 'Facebook',
            logo: 'http://previews.123rf.com/images/didora/didora1409/didora140900543/32021099-abeja-de-la-miel-y-el-panal-de-miel-icono-de-dise-o-plano-Foto-de-archivo.jpg'
    }, {
            nombre: 'google',
            logo: 'http://previews.123rf.com/images/didora/didora1409/didora140900543/32021099-abeja-de-la-miel-y-el-panal-de-miel-icono-de-dise-o-plano-Foto-de-archivo.jpg'
    }, {
            nombre: 'twiter',
            logo: 'http://previews.123rf.com/images/didora/didora1409/didora140900543/32021099-abeja-de-la-miel-y-el-panal-de-miel-icono-de-dise-o-plano-Foto-de-archivo.jpg'
    }, {
            nombre: 'Chaplist',
            logo: 'http://previews.123rf.com/images/didora/didora1409/didora140900543/32021099-abeja-de-la-miel-y-el-panal-de-miel-icono-de-dise-o-plano-Foto-de-archivo.jpg'
    }, {
            nombre: 'Chaplist',
            logo: 'http://previews.123rf.com/images/didora/didora1409/didora140900543/32021099-abeja-de-la-miel-y-el-panal-de-miel-icono-de-dise-o-plano-Foto-de-archivo.jpg'
    }
                   ];

    var testimonios = [
        {
            color: '#E1BEE7',
            nombre: 'Jose Estrada',
            foto: 'images/Jose.png',
            cuerpo: 'Muy Buena experiencia, es exelente, adios mucho gusto',
            id: ''
    }, {
            color: '##B2DFDB',
            nombre: 'TAmy Vivas',
            foto: 'https://s3.amazonaws.com/uifaces/faces/twitter/mantia/128.jpg',
            cuerpo: 'Muy Buena experiencia, me parecen exelentes apps',
            id: ''
    }, {
            color: '#BBDEFB',
            nombre: 'Jeyson Montenegro',
            foto: 'images/Jeyson.png',
            cuerpo: 'Muy Buen trabajo departe de los muchachos!',
            id: ''
    }, {
            color: '#F0F4C3',
            nombre: 'Jeremias Ortega',
            foto: 'images/Jeremias.png',
            cuerpo: 'Excelente!!!!!!!',
            id: ''
    }, {
            color: '#FFE0B2',
            nombre: 'Francisco Ardon',
            foto: 'images/Francisco.png',
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
