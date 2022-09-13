//A la variable apples se le asigna un valor de tipo number
let apples:number =5;

//Así sucesivamente
let speed:string= "19km/k";

let boolean:boolean =true;

let nothingMuch:null = null;

let nothing:undefined=undefined

let now: Date= new Date()


//ARRAYS/////////////////////
//A la variable colors se le asigna un valor de tipo array de string
let colors:string[]=['Rojo', 'verde']

//A la variable numbers se le asigna un valor de tipo array de number
let numbers:number[]=[1,2,3]

//A la variable buelano se le asigna un valor de tipo array de boolean
let buleano:boolean[]=[true, false]

//CLASSES/////////////////////
  class Car{

  }
let car: Car

//OBJECT LITERAL
//A la variable point se le asigna un objeto con los valores correspondientes de sus propiedades
let point:{x:number; y:number}={
  x:10,
  y:20
}

//FUNCTION (SIEMPRE UTILIZAN ANOTACIONES)
//Siempre utilizan ya que en algunos casos como en funciones, TS no avisa que cometimos el error de no colocar un RETURN, por lo que podríamos no encontrar el bug
//A la variable logNumber(no a la función) se le asigna un valor de los argunmentos de tipo number y un retorno de tipo nunguno (void); :(i:number)=>void 
const logNumber:(i:number)=>void = (i:number) => {
  console.log(i);
}
//Otro ejemplo, acá la anotación es para la función(sus argumentos y su return), no para la variable
const add = (a:number , b:number):number =>{
  //Se ha agregado la anotación para los argumentos y después de los : para el return que igualmente es un número
return a + b;
}



//Sabemos que en muchos casos no necesitaremos anotaciones gracias a la type inference. Esta funciona cuando una variable es inicializada en la misma expresión o línea, prácticamente funciona todo el tiempo, TS intentará inferir de qué tipo de valor se tratan cuando trabajamos con uno

//WHEN TO USE ANNOTATIONS? WHEN INFERENCE DOES NOT WORK?
//1) FUNCTION THAT RETURNS THE "any" TYPE
//EJEMPLO CON ERROR
const json='{"x":10, "y":20}';
const coordinates= JSON.parse(json);
console.log(coordinates)
//Tenemos el tipo "any" debido a que la salida de la función, o el valor que recibirá la variable coordinates puede ser de diferentes tipos en función de la entrada, por lo que debemos utilizar anotaciones
//Para agregar una anotación, utilizamos la forma de objeto literal= const coordinates:{x:number; y:number}= JSON.parse(json);
//CORREGIDO
const json1='{"x":10, "y":20}';
const coordinates1:{x:number; y:number}= JSON.parse(json);
console.log(coordinates)



//2) VARIABLE INICIALIZATED LATER
//EJEMPLO CON ERROR
let words=["red","green", "blue"];
let foundWord;
//Observamos que la variable foundword no está inicializada en una expresión, sino que depende del resultado de la condicional dentro de la iteración
for(let i=0; i<words.length; i++){
if(words[i]==="green"){
  foundWord=true;
  //En este punto la variable fue inicializada, pero debido a que es hasta aquí, TS no pudo inferir de qué tipo de valor se trataba al momento de declarar la variable foundWord
  //Para arreglar esto, entonces al declarar la variable se le asigna un tipo= let foundWord:boolen;
}
}
//CORREGIDO
let words1=["red","green", "blue"];
let foundWord1:boolean;
//Observamos que la variable foundWord1 no está inicializada en una expresión, sino que depende del resultado de la condicional dentro de la iteración
for(let i=0; i<words.length; i++){
if(words[i]==="green"){
  foundWord=true;
}
}

// Ejemplo mio: acá quise meter la declaración e inicialización de la variable dentro del if, pero si nos damos cuenta este valor nunca se lee ya que es una let dentro de un bloque de código
let words2=["red","green", "blue"];
for(let i=0; i<words2.length; i++){
if(words2[i]==="green"){
  let foundWord1:boolean=true;
}
}


//3) VARIABLE WHOSE TS CANNOT BE INFERRED CORRECTLY (HAS 2 OR MORE POSSIBLES TYPES)
//EJEMPLO CON ERROR
let numbers1=[1,2,-10];
let numberAboveZero=false;
for(let i=0; i<numbers.length; i++){
  if (numbers[i]>0){
    numberAboveZero=numbers[i]
    //Definitivamente no podemos asignar un valor de number a una variable que fue inicializada como booleana, por lo que le indicamos a TS que acepte 2 tipos de valores
  }
}
//CORREGIDO
let numbers2=[1,2,-10];
let numberAboveZero1: boolean | number=false;
//Se ha asignado a numberAboveZero1 los tipos boolean y number
for(let i=0; i<numbers2.length; i++){
  if (numbers2[i]>0){
    numberAboveZero1=numbers2[i]
  }
}


//MUY IMPORTANTE:
//TS NO VERIFICA LA LÓGICA DEL CÓDIGO, ÚNICAMENTE QUE LOS TIPOS SEAN LOS CORRECTOS, SI COMENTEMOS EL ERROR DE SUMAR EN VEZ DE RESTAR, A TS NO LE IMPORTARÁ, ÚNICAMENTE VERIFICARÁ QUE LAS VARIABLES SEAN INICIALIZADAS DE MANERA CORRECTA O QUE EL RETURN SEA DEL TIPO DE VALOR ESPERADO.

