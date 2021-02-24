
// desestructuracion de arreglos

const personajes = ['Naruto', 'Sasuke', 'Sakura', 'Kakashi'];

const [p1, p2, p3, p4] = personajes;

//console.log(p1);
//console.log(p2);
//console.log(p3);
//console.log(p4);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);


//Practica

const tarea = (valor) => {
    return [valor, () => {console.log('Hola Mundo')}];
}

const [valor, setNombre] = tarea('Samir');

console.log(valor);
setNombre();
