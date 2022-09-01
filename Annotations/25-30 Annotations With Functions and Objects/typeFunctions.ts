//FUNCTION (SIEMPRE UTILIZAN ANOTACIONES)
//Siempre utilizan ya que en algunos casos, TS no avisa que cometimos el error de no colocar un RETURN, por lo que podríamos no encontrar el bug
//A la variable logNumber(no a la función) se le asigna un valor de los argunmentos de tipo number y un retorno de tipo nunguno (void); :(i:number)=>void 
const logNumber1:(i:number)=>void = (i:number) => {
  console.log(i);
};
//Otro ejemplo, acá la anotación es para la función, no para la variable
const add1 = (a:number , b:number):number =>{
  //Se ha agregado la anotación para los argumentos y después de los : para el return que igualmente es un número
return a + b;
};

//Otro ejemplo para funciones no declaradas
function divide(a:number ,b:number):number{
  return a/b;
};

//Otro ejemplo para funciones declaradas
const multiply = function (a:number ,b:number):number{
  return a*b;
};

//Otro ejemplo para funciones sin return, por lo que no podremos agregar un return
const logger=(message:string):void =>{
  console.log(message)
};
const throwError =(message:string):never =>{
  //El never significa que nunca terminaremos de llegar al final de la función 
  throw new Error(message)
};

const todaysWeater ={
  date: new Date(),
  weather: "sunny"
};
//Ese objeto describe el clima de hoy, por ejemplo

const logWeather=(todaysWeater:{date:Date, weather:string}):void =>{
  //Ahora tenemos una función que toma este producto, en él se guardan los valores del objeto literal anterior con las anotaciones correspondientes
console.log(todaysWeater.date);
console.log(todaysWeater.weather);
}

logWeather(todaysWeater);
//Llamamos al logWeater con el