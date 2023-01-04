// No cambies los nombres de las funciones.

function crearGato (nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  var gato = {
    nombre: nombre 
  };
  gato.edad = edad;
  gato.meow = function(){
    return 'Meow';
  }
  return gato;
}
 var elgato = crearGato("Mipet", 2);
 console.log(elgato.nombre);
 console.log(elgato.edad);
 console.log(elgato.meow());

function agregarPropiedad (objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
  objeto[propiedad]= null;

  return objeto;
}

var objeto ={};
  console.log(objeto, "moneda");
  console.log(objeto, "divisa");


function invocarMetodo (objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
  objeto[metodo]();
}

var objeto = {
  saludar: function() {
    console.log("Hola!");
  }
};
invocarMetodo(objeto, "saludar");


function multiplicarNumeroDesconocidoPorCinco (objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
  return objetoMisterioso.numeroMisterioso * 5;
}

var objeto = {
  numeroMisterioso: 10
};
console.log(multiplicarNumeroDesconocidoPorCinco(objeto));


function eliminarPropiedad (objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:

  delete objeto[unaPropiedad];
  return objeto;
}
 objeto = {a: 1, b: 2, c: 3};
 var resultado = eliminarPropiedad (objeto, "c");
 console.log(resultado);

function nuevoUsuario (nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
  var usuario = {
    nombre: nombre,
    email: email,
    password: password
  };
  return usuario;
}

let miUsuario = nuevoUsuario("Frank", "frank@htomail.com", "123456");
console.log(miUsuario); // imprime { nombre: "Frank", email: "frank@htomail.com", password: "123456" }

function tieneEmail (usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contrario, devuelve "false"
  // Tu código:
  return "email" in usuario;
  
}
let mUsuario = { nombre: "Juan", email: "juan@example.com" };
  console.log(tieneEmail(mUsuario)); // imprime "true"

  let otroUsuario = { nombre: "Ana" };
  console.log(tieneEmail(otroUsuario));

function tienePropiedad (objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  return propiedad in objeto;
}

const objeto = {
  nombre: 'John',
  edad: 30
};

console.log(tienePropiedad(objeto, 'nombre')); 
console.log(tienePropiedad(objeto, 'edad')); 
console.log(tienePropiedad(objeto, 'genero'));

function verificarPassword (usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // Tu código:
  return usuario.password === password;
}

const usuario = {
  username: 'frank',
  password: 'micontraseña'
};

console.log(verificarPassword(usuario, 'micontraseña')); 
console.log(verificarPassword(usuario, 'contrseñaincorrecta')); 


function actualizarPassword (usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
  // Devuelve el objeto
  // Tu código:
  usuario.password = nuevaPassword;
  return usuario;
}
var usuari = {
  username: 'frank',
  password: 'contrseñaanterior'
};

console.log(actualizarPassword(usuari, 'nuevacontrseña'));

function agregarAmigo (usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // Tu código:
  usuario.amigos.push(nuevoAmigo);
  return usuario;
}
const user = {
  username: 'frank',
  password: 'contraseña',
  amigos: ['carlos', 'fernando']
};

console.log(agregarAmigo(user, 'samuel'));


function pasarUsuarioAPremium (usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:

  for (const usuario of usuarios) {
    usuario.esPremium = true;
  }
  return usuarios;
}

const usuarios = [
  { username: 'julio', password: 'clave123', esPremium: false },
  { username: 'maria', password: 'clave987', esPremium: false },
  { username: 'santiago', password: 'clave6543', esPremium: false }
];

[
  { username: 'julio', password: 'clave123', esPremium: true },
  { username: 'maria', password: 'clave987', esPremium: true },
  { username: 'santiago', password: 'clave6543', esPremium: true }
]

function sumarLikesDeUsuario (usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
  var suma = 0;
  for (const post of usuario.posts) {
    suma += post.likes;
  }
  return suma;
}

const usuario1 = {
  username: 'frank',
  password: 'micontraseña',
  posts: [
    { text: 'Hola, mundo!', likes: 5 },
    { text: 'Me gusta el ajedrez!', likes: 25 },
    { text: 'Es divertido programar!', likes: 13 }
  ]
};

console.log(sumarLikesDeUsuario(usuario1));

function agregarMetodoCalculoDescuento (producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:
  producto.calcularPrecioDescuento = function() {
    let descuento = this.precio * this.porcentajeDeDescuento;
    this.precio -= descuento;
    return this;
  }
}
let producto = { precio: 20, porcentajeDeDescuento: 0.2 };
agregarMetodoCalculoDescuento(producto);

producto.calcularPrecioDescuento();

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
}
