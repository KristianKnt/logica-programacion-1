const prompt = require('prompt-sync')();

console.log('Hola usuario este codigo ud va a ingresar tres numeros');

const datos = []

let datos1 = prompt('Digite el primer numero : ');
datos.push(parseInt(datos1));
let datos2 = prompt('Digite el segundo numero : ');
datos.push(parseInt(datos2));
let datos3 = prompt('Digite el tercer numero : ');
datos.push(parseInt(datos3));

// ahora identificamos cual numero es mayor cual es el menor y cual es de la mitad
console.log(datos);

datos.sort((a,b)=> b-a);

console.log(datos);

console.log(`El numero mayor es :${datos[0]}`)
console.log(`El numero de la mitad es :${datos[1]}`)
console.log(`El numero menor es :${datos[2]}`)
