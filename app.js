const yargs = require('yargs');
const colors = require('colors');
const { crearArchivo } = require('./helpers/multiplicar');
const { argv } = require('./config/yargs');

console.clear();

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log( nombreArchivo.green, 'creado'.green ) )
    .catch( err => console.log( err ));
    