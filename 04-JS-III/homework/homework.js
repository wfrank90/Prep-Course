// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array.shift();
}

devolverPrimerElemento([2,4,6,8]);
devolverPrimerElemento([true,false,false]);
devolverPrimerElemento(["a","e","i","o","u"]);

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array.pop();
}

devolverUltimoElemento([1,2,3,4,5]);
devolverUltimoElemento(["a","b","c","d","e"]);


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}

obtenerLargoDelArray([9,8,7,6,5,4,3]);
obtenerLargoDelArray(["z","x","c","v","b","n"]);


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var arrayn =[...array];
  for(let i=0; i < arrayn.length; i++){
    arrayn[i] += 1;
  } 
  return arrayn;
}
incrementarPorUno([-1,-2,-3,-5,-6]);
incrementarPorUno([1,2,3,4,5,6,7]);

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}
agregarItemAlFinalDelArray([1,2,3],4);


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;  
}
agregarItemAlComienzoDelArray([1,2,3,4],5);


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var concatenar = palabras.join(' ');
  return concatenar;
}
dePalabrasAFrase(["Hello", "Word!"]);


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var comprobar = array.includes(elemento);
  return comprobar;
}
arrayContiene(["F",3,"sol"],"sol");
arrayContiene(["F",3,"sol"],"luna");
arrayContiene(["F",3,"sol"],"F");
arrayContiene(["F",3,"sol"],3);

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0);
  return suma;
}
agregarNumeros([1,2,3,4,5]);

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma = resultadosTest.reduce((acumulador, elemento) => acumulador + elemento, 0);
  var promedio = suma / resultadosTest.length;
  return promedio;
}

promedioResultadosTest([10,20,30,40]);


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  var maximo = Math.max(numeros);
  return maximo;
}

numeroMasGrande([12,8,40,2]);


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length === 0) {
    return 0;
  }

  if (arguments.length === 1) {
    return arguments[0];
  }

  let producto = 1;
  for (let i = 0; i < arguments.length; i++) {
    producto *= arguments[i];
  }
  return producto;
}
 multiplicarArgumentos();
 multiplicarArgumentos(20);
 multiplicarArgumentos(4,6,8);

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var canti = arreglo.filter(function(num){
    return num > 18;
  });
  return canti.length;
}
cuentoElementos([12,20,22,24,50,4]);

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia== 6 || numeroDeDia==7){
    return "Es fin de semana";
  } else if (numeroDeDia > 0 && numeroDeDia <= 5){
    return "Es día laboral";
  }
} 
 diaDeLaSemana(1);
 diaDeLaSemana(7);


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var numero = n.toString();
  if (numero[0] == "9"){
    return true;
  }else{
    return false;
  }
}
empiezaConNueve(923);
empiezaConNueve(2345);

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var iguales = arreglo.every(function(num){
    return num == arreglo[0];
  });
  return iguales;
} 
todosIguales([4,4,4,4,4]);
todosIguales([5,5,5,5,3]);

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var resultado = [];
   for (var i = 0; i < array.length; i++) {
    if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
      resultado.push(array[i]);
    }  
   }
  if (resultado.length === 0){
    return "No se encontraron los meses perdidos";
  }else{
    return resultado;
  }
}

mesesDelAño(["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio","Noviembre"]);
mesesDelAño(["Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio","Noviembre"]);

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

  var resultado =[];
  for (var i = 0; i < array.length; i++) {
    if (array[i]> 100){
      resultado.push(array[i]);
    }
  }
return resultado;
}
mayorACien([40,30,200,103,140]);


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var resultado = [];
  for (var i = 0; i < 10; i++) {
    numero +=2;
    if(numero === i ){
      return "se interrumpio la ejecución";
    }
    resultado.push(num);
  }
  return resultado;
}

breakStatement(4);


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

  var resultado = [];
  for (var i = 0; i < 10; i++) {
    if (i === 5) {
      continue;
    }

   numero += 2;
    resultado.push(numero);
  }

  return resultado;
}
continueStatement(2);


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
