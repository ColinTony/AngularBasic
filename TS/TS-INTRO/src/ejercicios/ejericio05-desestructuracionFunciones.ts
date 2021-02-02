/*
    ===== Código de TypeScript =====
*/
// ahora vamos con la desestructuracion de argumentos.
// no es mas que usar los argumentos de una funcion para desestructurarlo
// al igual se puede usar para lo que retorne una funcion.

// tenemos dos productos en el carrito y queremos sacar el IVA y el total.

interface Producto{
    nombre:string;
    precio:number;
}

const articulo1: Producto = {
    nombre:'Xiaomi Redmi Note 8',
    precio:3500
}

const articulo2: Producto = {
    nombre:'Xiaomi Redmi Note 9',
    precio:4500
}

const carrito:Producto[] = [articulo1,articulo2];

// ahora creamos una funcion que reciba nuestro carrito
// vemos que la funcion retorna un arreglo. Lo cual podemos manipular
// como si fuera un arreglo comun y cualquiera lo cual podemos entonces
// desestructurar de manera como lo hacemos con los arreglos.
function ivaYTotal (carrito:Producto[]) : [number,number]
{
    let total = 0;
    let iva = 0;

    // aqui hacemos una desestructuracion direactemente como argumento.
    carrito.forEach(({precio}) => {
        total += precio;
    });
    iva = total*0.16;
    return [total,iva];
}

// ahora ya tenemos la funcion que nos devuelve un arreglo
// el cual podemos hacer una desestructuracion como un arreglo comun y corriente
// esto es demasiado util para la manera en la que s eva programar despues.

const [total, iva] = ivaYTotal(carrito);

console.log('Total: ' + total);
console.log('IVA: ' + iva);