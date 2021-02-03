// Encadenamiento Opcional
// Cuando nosotros usamos el operador ?: estamos diciento que es un valor opcional
// esto obviamente hay que tratarlo como tal. Si es que ese valor no existe puede que
// no obtengamos un valor deseado dentro de una funcion o simplemente nos de un error.

// Veamos un ejemplo basico y sencillo
// Tenemos unos pasajeros los cuales pueden o no tener hijos.

interface Pasajero{
    nombre:string;
    hijos?:string[];
};

// ahora creamos dos pasajeros. Una con hijos y la otra sin  hijos
const pasajero1:Pasajero = {
    nombre : 'Colin',
    hijos : ['Jill','Ada']
};
// creamos el otro pasajero sin hijos
const pasajero2:Pasajero = 
{
    nombre:'Carlos'
};

// Ahora si nosotros tenemos una funcion en la cual queramos 
// saber cuantos hijos tiene cada pasajero entonces tendriamos en teoria
// una funcion que nos pregunte si existe ese dato en la funcnion 
// para esto TS puede ocupar el encadenamiento Opcional 
// nos ayuda a tratar ese tipo de situaciones. Lo explicare mejor en el codigo.

function cuantosHijos(pasajero:Pasajero):void
{
    // creamos la funcion y ahora podemos hacer uso del ?.
    const hijos = pasajero.hijos?.length || 0;
    // estamos preguntando si el pasajero tiene hijos
    // si no tiene hijos estara como undefined || 0 el 0 
    // le va ganar al undefined por ser un valor definido.
    // entonces el valor de hijos seria 0
    console.log(hijos);
}

// ahora usemos la funcinon
cuantosHijos(pasajero1); // salida deseada seria 2
cuantosHijos(pasajero2); // salida deseada seria 0