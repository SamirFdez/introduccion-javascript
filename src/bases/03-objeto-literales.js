

//Objetos literales

const persona = {
    nombre: "Samir",
    apellido: "Fernandez",
    edad: 23,
    direccion: {
        ciudad: "Santo Domingo",
        zip: 5423423,
        lat: 14.21212,
        lng: 34.312312312
    }
};

//clonacion de un objeto
const persona2 = {...persona};
persona2.nombre = "Gabriel";
persona2.apellido = "Crooke";

console.log(persona);
console.log(persona2);

//console.table(persona);