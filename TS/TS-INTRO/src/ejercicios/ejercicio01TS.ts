/*
    ===== Código de TypeScript =====
*/
// En  TS se crear objetos anidados de esta manera.
// Aqui no hay mucho que explicar mas que solo que es recomendable
// crear las interfaces necesaras para no hacer tan complejo el codigo.
// Recordemos que las interfaces son 0 lineas de codigo para JS


interface Direccion {
    calle:string;
    pais:string;
    ciudad:string
}

interface SuperHeroe  
{
    nombre : string;
    edad: number,
    direccion : Direccion,
    mostrarDireccion: () => void
};

const superHeroe : SuperHeroe = {
    nombre : 'spiderman',
    edad : 30,
    direccion : {
        calle : 'Main St',
        pais : 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion(){
        return this.nombre + ' direccion : ' + this.direccion.calle + ', ' + this.direccion.ciudad + ', '+ this.direccion.pais;
    }
};

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);