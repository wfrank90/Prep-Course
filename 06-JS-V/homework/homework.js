// No cambies los nombres de las funciones.

function crearUsuario() {
  class Usuario {
    constructor(opciones) {
      this.usuario = opciones.usuario;
      this.nombre = opciones.nombre;
      this.email = opciones.email;
      this.password = opciones.password;
    }

    saludar() {
      return 'Hola, mi nombre es: ' + this.nombre;
    }
  }

  var frank = new Usuario({ nombre: 'Frank', usuario: 'Esquivel' });
  console.log(frank.saludar());
}

crearUsuario();

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  Constructor.prototype.saludar = function () {
    return 'Hello World!';
  };
}
const instance = new Constructor();
console.log(instance.saludar());

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"

  String.prototype.reverse = function () {
    return this.split('').reverse().join('');
  };
}

agregarStringInvertida();

console.log('menem'.reverse());
console.log('toni'.reverse());

// ---------------------------------------------------------------------------//
//Crea el constructor de la clase "Persona"
//Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
//Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
//Ej: { 
//   Nombre: 'Juan',
//   Apellido: 'Perez',
//   Edad: 22,
//   Domicilio: 'Saavedra 123'
//  }

class Persona {
  constructor(nombre, apellido, edad, domicilio) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.domicilio = domicilio;
  }

  detalle() {
    return {
      Nombre: this.nombre,
      Apellido: this.apellido,
      Edad: this.edad,
      Domicilio: this.domicilio
    };
  }
}

const juan = new Persona('Juan', 'Perez', 22, 'Saavedra 123');
console.log(juan.detalle());

function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
 
    return new Persona(nombre, apellido, edad, dir);
  
}

  juan = crearInstanciaPersona('Juan', 'Pérez', 22, 'Saavedra 123');
  console.log(juan.detalle());

function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
  Persona.prototype.datos = function() {
    return `${this.nombre}, ${this.edad} años`;
  };
}

agregarMetodo();

juan = new Persona('Juan', 'Pérez', 22, 'Saavedra 123');
console.log(juan.datos());


// No modificar nada debajo de esta línea
// --------------------------------

export default {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo,
  Persona
};
