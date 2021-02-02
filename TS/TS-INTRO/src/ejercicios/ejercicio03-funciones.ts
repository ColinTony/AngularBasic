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


// Ahora vamos a ver las funciones con parametros objetos.
// sabemos que en TypeScript usamos un tipo de clases tontas.
// llamadas interface que nos ayudan a restringuir los datos que 
// vamos a mandar o usar dentro de nuestro codigo. Tambien podemos
// asignarle funciones. Las cuales se declaran de esta forma.
// haremos que un jugador se le suba los puntos de experiencia.

interface Jugador{
    nombre:string;
    px:number;
    mostrarInfo: () => void;
}

// ahora declaramos un jugador. Vean que se usa const y no let.
// la verdad son lo mismo solo que es menos pesado const ya que no
// debe setear lo de let o var. Const mantiene su valor y su valor es un Jugador.

const jugador1 : Jugador = {
    nombre:'colin',
    px: 100,
    mostrarInfo(){
        console.log('nombre : ' + this.nombre + ' px:'+ this.px);
    }
};
// como podemos notar se puede asignar una funcion como propiedad para un objeto
// esto ya lo veremos mejor cuando se hagan clases y objetos.

// ahora vamos a crear la funcion que reciba un Jugador como parametr
// y vamos a sumarle los puntos de experiencia obtenidos.

function ganarPx (jugador : Jugador , px : number) : void
{
    jugador.px += px;
}

// el jugador  gana 100 px
ganarPx(jugador1,100);

jugador1.mostrarInfo();