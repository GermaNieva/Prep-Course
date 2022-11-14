// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'holaa';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 15;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  var texto= str;
  return texto
}
devolverString("hola");

function suma(x, y) {
  var sumaxy= x+y;
  return sumaxy; 
}
suma(3,4);

function resta(x, y) {
  var restadedosnumeros= x-y;
  return restadedosnumeros; 
}
resta(8-3);
function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  var multdosnumeros= x*y;
  return multdosnumeros;
  
}
multiplica(8,9);

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
   var divisiondosnum= x/y;
  return divisiondosnum;
}
divide(9/3);

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if (x==y){
    return true ;
  }
  return false;
}
sonIguales(5,5);


function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:

  if (str1.length==str2.length){
    return true;
  }
  return false;
}
tienenMismaLongitud("holaa","holaa");


function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num<90){
    return true;
  }
  return false;
}
menosQueNoventa(80);


function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num>50){
    return true;
  }
  return false;
}
mayorQueCincuenta(60);

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  var restodexy= x%y;
  return restodexy;
}
obtenerResto(9,2);

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num%2==0){
    return true;
  }
  return false;
}
esPar(2);

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num%2!=0){
    return true;
  }
  return false;
}
esImpar(5);


function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  var numal2=Math.pow(num,2);
  return numal2;
}
elevarAlCuadrado(2);


function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  var numal2=Math.pow(num,3);
  return numal2;
  
}
elevarAlCubo(5);

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  var numelevado=Math.pow(num,exponent);
  return numelevado;
  
}
elevar(8,9);


function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  var redondearnum= Math.round(num);
  return redondearnum;
}
redondearNumero(8.6);

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  var redondearnuma= Math.ceil(num);
  return redondearnuma;
}
redondearHaciaArriba(8.2);

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  var numeroaleatorio= Math.random();
  return numeroaleatorio;
  
}
numeroRandom()

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  
  if (numero>0) {
    return "Es positivo";
  }
  else if (numero<0) {
    return "Es negativo";
  } 
  else {
    return false;
  }

}
esPositivo(10);

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  var variablestr= str+"!"
  return variablestr
}
agregarSimboloExclamacion("hello world")

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  
  var nombrecompleto=nombre+" "+apellido;
  return nombrecompleto;
  
}
combinarNombres("Germán", "Nieva");

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  var saludo= "Hola "+nombre+"!";
  return saludo;
  
}
obtenerSaludo("Martin");

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  var arearectangulo= alto*ancho;
  return arearectangulo;
}
obtenerAreaRectangulo(15,20);

function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  var perimetro= lado*4;
  return perimetro;
  
}
retornarPerimetro(6);

function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  var areatriangulo= (base*altura)/2;
  return areatriangulo;

}
areaDelTriangulo(20,30);

function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  var tipodecambio= euro*1.20;
  return tipodecambio;
}
deEuroAdolar(6);

function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  if(letra==="a"|| letra==="e"||letra==="i"||letra==="o"||letra==="u"){;
    return "Es vocal";
  }
  if (letra.length > 1) {
    return "Dato incorrecto";
  } 
  else {
    return "Dato incorrecto";
  }
  
}
esVocal("a");


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
