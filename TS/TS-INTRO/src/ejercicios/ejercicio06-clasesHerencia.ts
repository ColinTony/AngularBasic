// Importaciones y Exportaciones.
// para importar simplemente es usar la intelisense del editor pero
// dependiende de que queremos exportar. Cualquier cosa que queramos exportar
// sera con export y la importacion en otro archivo seria con import {} 'localizaciondelarchivo'

// no hare ejercicio sobre importar y exportar ya que se me hace inesesario. Solo es conocer
// como se hace y es usando export e import.

// ------- Clases y Extends ---------

// tenemos diferencias entre una interfaz y una clase la primera es que 
// en JS las interfaces no existen y las clases si. Entonces este codigo escrito
// en TS como clases si se veran en el archivo de ejecucion en el navegador.
// ahora una diferencia que tiene las clases de TS con las de JS es el encapsulamiento
// en TS es posible usar public , private  y static.

class Heroe
{
    private nombre:string;
    private edad:number;
    private nombreReal:string;

    // los constructores funcion tal cual como en cualquier otro lenguaje con POO
    // es la funcion que se va ejecutar al inicializar la clase.
    constructor ( nombre:string , edad : number , nombreReal:string)
    {
        this.nombre = nombre;
        this.edad = edad;
        this.nombreReal = nombreReal;
    }
    // podemos ver que la declaracion de un constructor es muy facil de hacer.
    // pero sinceramente es mucho escritura de codigo que luego podemos tener
    // asi que TS nos permite hacer una clase con menos lineas de codigo.
};

// hacer esto es igual que los mismo que hicimos arriba
// con menos lineas de codigo.
class Heroe2
{
    constructor(
        private nombre:string,
        private edad:number,
        private nombreReal:string
        ){};
}

// ahora si queremos extender solo tenemos que usar la palabra extends
// crearemos otra clase que va ser la extendida.

class PersonaNormal
{
    constructor(
        public nombre:string, // le pongo el mismo nombre para observar como se hereda
        public trabajo:string,
        public isSoltero:boolean
    ){};
};

// ahora ya tenemos declarado una clase de persinaNormal
// la cual sera de la que vamos a extender

class Heroe3 extends PersonaNormal
{
    constructor(
        public nombre:string,
        public edad:number,
        public nombreReal:string
        ){
            // vemos como se pasa como parametro al super el nombre real.
            super(nombreReal,'Filantropo-Millonario',false); // es necesario llamar al constructor padre.
        };
};

// ahora podemos llamar a una funcion que imprima
const ironman = new Heroe3('IronMan',40,'Tony');
console.log(ironman);