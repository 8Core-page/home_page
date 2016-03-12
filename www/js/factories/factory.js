angular.module('factories', [])

.factory('factory', function () {
    var comun = {};
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

    comun.panchoElTriste = function(){
        return 'estoy triste';
    }

    comun.getMembers = function(){
        return array;
    }

    return comun
});
