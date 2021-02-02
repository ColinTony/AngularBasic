
/*
// en TypeScript podemos hacer arreglos. Conocemos los arreglos como una coleccion de datos
// que tienen algo en comun o mas bien deberian tener algo en comun, Sabemos que en JS los
// arreglos pueden contenter cualquier tipo de valoers usando una declaracion como esto
// let arreglo = []; esto nos va permit cualquier tipo de datos. De hehco typescript lo va
// intentar inferir pero lo va declarar como un tipo any. Lo cual es una mala practica.

// si queremos hacer un arreglo en TS hay que especificar el tipo.

let habilidades : string [] = ['C++','Js','Java']; // estamos haciendo un arreglo de tipo string.
// segun la documentacion de TypeScript tambien se pueden declarar con arreglos genericos.
// let habilidades2: Array<Persona> o de una manera para hacerlos con numbers
let habildiades2 : Array <number> = [1,2,3,4,50];

// Objetos e interfaces.

// a la hora de crear un objeto en JS podemos agregar caracterisiticas simplenete con
// un obj.caracter = "nueva" esto en TS tambien es posible pero recordemos que es
// estrictamente typado entonces lo que demos hacer es crear una interfaz que nos 
// de ese "template o contrato" para crear nuestro objeto. De esta manera 

// declaracion de interfas.

interface Persona
{
    nombre : string;
    habilidades: string[];
    edad : number;
    ciudadNatal ?: string; // :? es una propiedad que se puede usar o no.
};

const persona : Persona = 
{
    nombre : "Colin",
    habilidades : ['JS','C/C++','Java'],
    edad : 22
};
persona.ciudadNatal = "CDMX";
console.table(persona);*/