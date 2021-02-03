// Ahora veamos el concepto de genericos.
// funcionan igual que en Java. Los cuales podemos enviar y especificar
// el tipo de dato a recibir. Se usa <T> para decir que es de tipo generico.

// esta funcion nos esta diciendo que recibe cualquier tipo de dato.
// y que el T sera el tipo de dato que nosotros le especificquemos.
// es un poco complejo entenderlo de primera. Pero si ya han trabajado con ellos
// en algun otro lenguaje de programacion se daran cuenta que es muy sencillo

function tipoGen<T>(tipo: T)
{
    return tipo;
}

let soyNumero:number = tipoGen<number>(100); // vemos que claramente funciona
let soyString:string = tipoGen<string>('Hola mundo'); // ahora vemos que tambien funciona.

// algo tambien interesante es que podemos hacer que la funcion devuelva un tipo de dato en especifico
// no importado el dato que nosotros le hayamos pasado. Y esto poninendolo en la funcion de esta manera
function tipoGen2<T>(tipoG:T):string{
    return tipoG.toString();
}
// obivamente tenemos que tomar en concideracion que no todos los tipos de datos tienen la
// funcion toString lo cual hay que tener cuidado cuando usemos este tipo de funciones.

let soyStringMandoNumero:string = tipoGen2(100); // le mandamos un numero y devolvemos un string.
let soyString2:string = tipoGen2('Soy String'); // ahora le mando un string y me devuelve un string.
