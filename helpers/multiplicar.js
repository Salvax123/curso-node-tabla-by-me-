const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {

    try {

        if( listar  ){

            console.log('========='.red);

            console.log('TABLA DEL:'.black.bgWhite, colors.blue( base ) );
        
            console.log('========='.red);

        }
        
        let salida = '';
    
        for( let i = 1; i <= hasta; i++){
    
            salida += `${ base } x ${ i } = ${ base * i }\n`;
    
        }
    
        if( listar ){

            console.log( salida.rainbow );

        }
    
        fs.writeFileSync(`./tabla/tabla del ${ base }.txt`, salida);
    
        return `tabla-${ base }.txt`;
        
    } catch ( err ) {
        
        throw err;

    }

}

module.exports = {

    crearArchivo

}