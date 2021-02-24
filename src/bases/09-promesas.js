
// promesas en JS

import {getHeroeById} from './bases/08-export-import'
import {getHeroeByOwner} from './bases/08-export-import'


/* const promesa = new Promise( (resolve, reject) => {
    
    setTimeout( () => {

        const heroe2 = getHeroeById(2);
        resolve(heroe2);
        reject('No se pudo encontrar el heroe');
    }, 2000);
});

//then es cuando la promesa se cumple
promesa.then( (heroe) => {
    console.log('heroe', heroe);
})

.catch( error => console.warn(error)); */

const getHeroeByIdAsync = (id) => {

    return new Promise( (resolve, reject) => {
    
        setTimeout( () => {
    
            const heroe = getHeroeById(id);

            if(heroe){
                resolve(heroe);
            }
            else {
                reject('No se pudo encontrar el heroe');
            }
        }, 2000);
    });

}

getHeroeByIdAsync(1)
    .then(console.log)
    .catch(console.warn);
