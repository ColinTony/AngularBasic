/*
    ===== Código de TypeScript =====
*/

// Desestruccturacion de Objetos.
// En TS es comun que nosotros quetamos accedes a nuestras variables de las interfaces
// cuando nosotros creamos un objeto podemos accedes a ellas con objeto.propiedad.
// con este concepto nos vamos ayudar demasiado en acceder a los datos de ellas.
// imaginemos que tenemos un objeto con bastantes propiedades u objetos anidados
// lo que estariamos haciendo es acceder a ellas con objeto.proipuedadObj.Propiedad
// y si todavia la propiedad Obj tiene otro objeto dentro tendremos muchos '.' en cada acceso
// en teoria no esta mal, pero es tedioso. 


// ahora imaginemos que tenemos un reproductor y detalles del autor

interface Cancion {
    nombreC:string;
    autor:string;
    anio:number;
};

interface Reproductor
{
    volumen : number;
    minuto: number;
    segundo: number;
    cancion: Cancion
};

// instanciamos nuestro objeto
const reproductor: Reproductor = {
    volumen:90,
    minuto:1,
    segundo:3,
    cancion: {
        nombreC:'El Mundo',
        autor:'Love of Lesbian',
        anio:2020
    }
};

// digamos que queremos acceder a los datos de Reproductor
// normalmente hariamos esto.
console.log("Volumen :" + reproductor.volumen);
console.log("Minuto :" + reproductor.minuto);
console.log("Segundo :" + reproductor.segundo);
console.log("Cancion: " + reproductor.cancion.nombreC);
console.log("Año: " + reproductor.cancion.anio);
console.log("Autor : " + reproductor.cancion.autor);
// esto no esta mal. Pero es tedioso tener que acceder a los datos de esta forma.

// En TS podemos hacer una desestructuracion del objeto que queremos para
// poder acceder a sus datos de manera mas simple. y se hace de esta forma.

const {volumen , minuto, segundo,cancion} = reproductor; // ahora estoy accediendo directamete al valor
// de las propiedades del reproductor. Para acceder a ahora a los objetos que estan anidados
// podemos hacer la misma desestructuracion. pero para el objeto Cancion.
const {nombreC , autor, anio} = cancion; // ahora podemos hacer uso de las variables mas faciles.
// usandolas de esta forma
console.log("Volumen :" + volumen);
console.log("Minuto :" + minuto);
console.log("Segundo :" + segundo);
console.log("Cancion: " + cancion.nombreC);
console.log("Año: " + anio);
console.log("Autor : " + autor);
// mucho mas limpio


// ---------------- Desestructuracion de Arreglos -----------------

// Ahora digamos que queremos los valores de un arreglo. Podemos hacerlo de la misma manera
//  que con los objetos, pero cuidando algunas cositas.

const dbz:string[] = ['Goku','Vegeta','Gohan'];
// en la desestructuracion de arreglos tenemos que ser claros en las posiciones.
// y la diferencia entre la de objetos es el uso de [] en vez de {}.
// sin la desestructuracion de arrelgo podemos acceder a los valores de esta forma
console.log('P1: ' + dbz[0]);
console.log('P2: ' + dbz[1]);
console.log('P3: ' + dbz[2]);


// desestructurando el arreglo
const [p1,p2,p3] = dbz; // ahora p1 es goku, p2 vegeta y p3 gohan.

console.log('P1: ' + p1);
console.log('P2: ' + p2);
console.log('P3: ' + p3);

// Ahora si nosotros quisieramos desestructurar solo un valor del arreglo
// podriamos ahcerlo simplemente dejando los espacios necesarios en blanco.
const [ , , p3_2] = dbz; // ahora p3_2 es Gohan.
console.log('P1: ' + p3_2);

