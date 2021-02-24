
//Desestructuracion o asignacion desestructurante

const persona = {
    nombre: 'Samir',
    edad: 23,
    username:'Superman'
};

const {nombre, edad, username} = persona;

//console.log(nombre);
//console.log(edad);
//console.log(username);

const retornaPersona = ({nombre, edad, sexo = 'masculino', username}) => {

    //console.log (nombre, edad, sexo, username);

    return {
        nombreUser: username,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.2234
        }
    }
}

const {nombreUser, anios, latlng:{lat, lng}} = retornaPersona(persona);

console.log(nombreUser, anios);
console.log(lat, lng);