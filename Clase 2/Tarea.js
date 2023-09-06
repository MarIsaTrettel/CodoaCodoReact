// reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Emilia";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 4;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  console.log(str)
}
devolverString("Cadena de texto")


function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  console.log(x+y)
} 
suma(5, 3)

function resta(x, y) {
  // Resta "x" de "y" y devuelve el valor
  // Tu código:
  console.log(x-y)
}
resta (20, 11) 

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  console.log(x*y)
}
multiplica (10, 6)

const divide = (x, y) => (x/y);console.log (divide (100, 6))
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:

const sonIguales = (x, y) => x == y ? console.log("Son iguales") : console.log("false")
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:utilizar if y else
sonIguales(20,20)


function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if (str1.length == str2.length){
    console.log("true")
  }else{
    console.log("false")
  }
}
tienenMismaLongitud("perro", "gato")

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num < 90){
    console.log("true")
  }else{
    console.log("false")
  }
}
menosQueNoventa (50)

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num > 50){
    console.log("true")
  }else{
    console.log("false")
  }
}
mayorQueCincuenta (45)


function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  console.log (x%y)
}
obtenerResto(21, 5)

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num % 2 == 0){
    console.log("true")
  }else{
    console.log("false")
  }
}
esPar(20)

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num % 2 != 0){
    console.log("true")
  }else{
    console.log("false")
  }
}
esImpar(31)

const elevarAlCuadrado = num => num**2;
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
 console.log (elevarAlCuadrado (4))



const elevarAlCubo = num => num ** 3; 
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
console.log (elevarAlCubo(4)) 

const elevar = (num, exponent) => (num ** exponent); console.log (elevar(4,2))
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:


const redondearNumero = num => Math.floor(num); console.log(redondearNumero(1.33336))
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:

const redondearHaciaArriba = num => Math.ceil(num); console.log(redondearHaciaArriba(2.5559))
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:



const numeroRandom = num => num ; console.log ( numeroRandom(Math.random()))
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()




const esPositivo = numero => (numero > 0) ? console.log("Es positivo"): (numero < 0) ? console.log( "Es negativo"): console.log("false");
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false


esPositivo(10)

const agregarSimboloExclamacion = str => (str+'!'); console.log(agregarSimboloExclamacion("Hello world"))
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  
const combinarNombres = (nombre, apellido) => nombre + " " + apellido; console.log(combinarNombres("Bruce", "Wayne"))
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"
  // Tu código:

const obtenerSaludo = nombre => "Hola " + nombre + "!" ; console.log(obtenerSaludo("Martin"))
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:


function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:

}

function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí

}

function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí


}

function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. 
  //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí

}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    //si ingresa una consonante muestre en pantalla dato incorrecto
  //Escribe tu código aquí
if (strlen(letra) > 1)
{ 
 console.log("Dato incorrecto")
}else if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") 
{
  console.log("es vocal")
}

}
esVocal("ab");