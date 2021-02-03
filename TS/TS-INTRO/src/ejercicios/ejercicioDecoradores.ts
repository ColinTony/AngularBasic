
// Decoradores de clase. Existen diferentes tipos de decoradores
// pero en esta ocacion veremos los decoradores de clase. Son los qu eusa Angular
// aunque bueno lo importante es el concepto.

// un decorador no es mas que una funcion que expande o añade funcionalidades especiales a una clase
// suena complejo pero no es. Esta funcion es un decorador.
// el cual es de tipo generico que expande de otra clase y tiene sus argumentos.
// el constructor es el cual ya conocemos.
function classDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
  ) {
    return class extends constructor {
      newProperty = "new property";
      hello = "override";
    };
  };

  // ahora vamos con una clase 
  // para añadir un deocrador solo usamos el @nombredecodador.
  // es importante que modifiquemos el archivo tsconfig. Y añadamos
  // en la parte de abajo experimentaldecorators = true.
  // para que podamos trabajar con ellos sin ningun error.
  // una vez que añadamos esto debemos reiniciar el servidor.
@classDecorator
  class MiSuperClase {
    private nombre:string;
   
    constructor(nombre:string)
    {
        this.nombre = nombre;
    }

   getNombre():string {
        return this.nombre;
    }
  }

  // ahora en consola veriamos como funciona
  // antes de una inicializacion.
  console.log(MiSuperClase);
  // despues de inicializarlo
  const miClase = new MiSuperClase('Colin');
  console.log(miClase.getNombre);