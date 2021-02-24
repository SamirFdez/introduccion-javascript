
// funciones en JS

const saludar = function (nombre){
    return `Hola ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
}

const saludar3 = (nombre) => `Hola ${nombre}`;

const saludar4 = (nombre) => `Hola Mundo`;


console.log(saludar('Samir'));
console.log(saludar2('Gabriel'));
console.log(saludar3('Cristopher'));
console.log(saludar4('nombre'));


const getUser = () => {
    return {
        userid: '000001',
        username: 'SamirKingX'
    }
}

const user = getUser();

console.log(user);


// Practicando

const getUsuarioActivo = (nombre) => ({
    userid: '000002',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('CriistRD');
console.log(usuarioActivo);