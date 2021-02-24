
// importar y exportar

import heroes, {owners}  from '../data/heroes'

//console.log(owners);

//find
export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id);

const getHeroeByIdd = getHeroeById(2);
//console.log(getHeroeByIdd)

//filter
export const getHeroeByOwner = (owner) => heroes.filter( (heroe) => heroe.owner === owner);

const getHeroeByOwnerr = getHeroeByOwner('DC');
//console.log(getHeroeByOwnerr)