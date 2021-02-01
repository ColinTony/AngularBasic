/*
    ===== Código de TypeScript =====
*/
// declaracion de variables en TypeScript
// TS es estricto con los tipos de variables. No quiere decir que no podemas
// declarar una variable let nombre = "colin"; si no que es mejor darle el
// tipo de dato, asi hacemos nuestro codigo mejor legible.
let nombre : string = "Colin";
let isLife : boolean = true;
let edad : number = 22;

// que pasa si queremos que un valor de tipo string tome un valor number
// o viceversa. TS te permite darle dos tipos de valores a una variable.
// esto es demasiado funcional y chingon. Ejemplo

let hp : string | number = 95;
hp = "Full"; // aqui podemos ver que se pudo cambier el tipo de dato
// sin que se queje  TS del tipo de dato.

console.log('Colin esta vivo: '+nombre);
console.log('Edad: '+edad);
console.log(`nombre: ${nombre}`);
