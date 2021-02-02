/*
    ===== Código de TypeScript =====
*/
// Funcniones en TS.
// En javascript es comun escribir funciones que no especifican el tipo de dato
// que se debe recibir y devolver. Esto hace que sea un poco mas dificil el leer el codigo
// ahora TS nos permite tipar esas funciones  dandonos la posibilidad de especificar
// tanto el tipo de datos de los parametros como los que va devolver la funcion.


// Ejemplo de una funcion en TS
function sumar (num1 : number , num2 : number) : number{
    return num1+num2;
}
// como podemos ver el tipado ahora es estricto y hace mejor legible el codigo
// tambien se pueden usar funciones flecha.
const sumarFlecha = (num1:number,num2:number):number => {return num1+num2;};

console.log(sumarFlecha(5,4));
console.log(sumar(10,10));

// Parametros opcionales y obligatorios
// EN TS podemos tener parametros opcionales.
// las cuales se pueden mandar o no o tambien darles un valor predetrminado en la funicon.

// esta funcion esta hecha para recibir 3 parametros de manera obligatoria
function multiplicar(num1:number , num2 : number , num3:number) : number 
{
    return num1*num2;
}
console.log(multiplicar(1,2,3));

// ahora tenemos que el parametro 3 puede enviarse o no. Dejandolo en undefined
function multiplicarOpc(num1:number , num2 : number , num3?:number) : number 
{
    return num1*num3;
}
console.log(multiplicarOpc(1,2)); // el resultado debe ser NaN ya que num 3 no se envia
console.log(multiplicarOpc(1,2,3)); // el resultado debe ser 3, ya que ahora si envio el parametro num3

// una funcinon opcional y valor predeterminado 
function multiplicarPred (num : number, num2 : number = 2 , num3 ?: number) : number
{
    return num*num2;
}
console.log(multiplicarPred(1));