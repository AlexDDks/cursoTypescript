//Las interfaces crean un nuevo tipo dentro de una aplicación. De la misma manera que tenemos string o booolean, estamos creando un tipo nuevo,es decir; es un tipo que vamos a personalizar nosotros mismos.

//Definimos un objeto que represente a un auto (ya hay inferencia de TS)
const oldCivic={
  nombre: 'Civic',
  año: 2000,
  funciona: true
};

//Definimos una función que opere sobre este objeto y creamos las anotaciones correspondientes de los argumentos para un objeto literal. Esto funciona pero no es lo más adecuado ya que imagínense que tengamos una cantidad grande de propiedades
const printVehicle= (vehicle: { nombre:string; año:number; funciona:boolean }):void =>  {
console.log("Name: "+ vehicle.nombre); // No utilizamos el .this, debido a que ya no estamos en el mismo bloque de código que el objeto literal

//COMENZAMOS A UTILIZAR LA INTERFACE, REPETIMOS EL CÓDIGO ANTERIOR PARA UTILIZAR ESE EJEMPLO:

//Cada que creamos un nuevo tipo(interface), comenzamos con la letra inicial del nombre de esta en mayúsculas, colocamos posteriormente el tipo de valores que esperamos tener en esta interfaz, divido mediante punto y coma cada uno
interface Vehicle{
////Acá he comentado las otras propiedades de Vehicle, para poder utilizar la función printVehicle1 para declarar drink, ya que drink tiene otras propiedades, pero en ella se encuentra summary, lo cual comparte con el objeto oldCivi1
  // nombre: string;
  // año:number;
  // funciona:boolean;

  //EN LA PARTE 2 DEL CURSO DE INTERFACES hemos agregado otra propiedad la cual es una función(método, acuérdate que estamos usando la anotación ES2015) que devuelve un string, que obligatoriamente debe de estar presente en el objeto en donde se vaya a requerir la interfaz. La anotación hace alusión a que tendremos un return string
  summary():string;
  //PUEDE NO HABER UNA PROPIEDAD AQUÍ EN DONDE SE ESCRIBEN LOS TIPOS EN LA INTERFACE Y QUE SÍ ESTÉ PRESENTE EN EL OBJETO oldCivic1 y no habrá error, siempre y cuando los requerimientos de donde se espere el return de nuestra función final cumpla con con el tipo al que ese return se refiere. Por ejemplo en nuestro caso ESTAMOS ESPERANDO UN CONSOLE LOG DE LA FUNCIÓN SUMMARY, TS REGRESA A VER A LA CONSTANTE oldCivic1 y dice "¿SATISFACE ESTE OBJETO A LA INTERFACE Vehicle?, de ser así no marca errores ya que tenemos la función summary que es una string, posteriormente mira al objeto oldCivi1 y verifica que tenga esa misma propiedad y con eso le basta, no mira las demás propiedades del objeto. PERO ES IMPORTANTE ACLARAR QUE ESTO SOLO ES CON LA INTERFACE YA QUE UN OBJETO NO PUEDE EXCENTAR ALGUNA PROPIEDAD QUE EN LA INTERFACE SÍ ESTÉ.

  // Todo se puede resumir a un: ¿TIENE EL OBJETO LA PROPIEDAD INICIALIZADA EN LA INTERFACE? SI: ENTONCES PERTENECE AL TIPO DE LA INTERFACE, NO: ENTONCES NO PERTENECE 
}

//Cambio el nombre de la variable debido a que estoy reutilizando código y estas son variables en un mismo bloque y en este caso es constante
const oldCivic1={
  nombre: 'Civic',
  año: 2000,
  funciona: false,
  largo: "mucho",
  //Hemos agregado la función que era necesaria para que esta constante pertenezca al tipo interface
  summary():string{
    return "name:" +  this.name
  }
};

//EN LA PARTE 3 DEL CURSO DE INTERFACES:
//Hemos agregado un nuevo objeto el cual también tiene un tipo de dato que es una función que devuelve un string (el summary), por lo que también es considerado de tipo "Vehicle", que por el momento vamos a saltarnos el que el nombre de la interface no concuerda con la información dentro del objeto:
const drink={
  color: "negro",
  carbonatado: true,
  azúcar:40,
  summary():string{
    return "Mi bebida tiene "+ this.azúcar +" gramos de azúcar"
  }
}// Debido a que ambos tienen la propiedad summary() que devuelve un string, entonces ambos pueden ser utilizados en la función printVehicle1

//Como podemos constatar en esta parte del código, podemos ver que únicamente estamos utilizando la interface Vehicle y no declarando el tipo de cada valor, como comúnmente sucedía

// La función hace lo siguiente: recibe como argumento un objeto de tipo vehicle, al cual posteriormente sólo le hace un console.log del método summary
const printVehicle1= (vehicle: Vehicle):void =>  {
console.log(vehicle.summary());
}

// Acá lo que hacemos es ejecutar la función inicializada en la línea 56, dándole como argumento de tipo Vehicle el objeto oldCivid1
printVehicle1(oldCivic1)

//Lo importante a notar acá es que la interface establece qué tipo de valores tendremos, por lo tanto la constante oldCivic tiene todos esos valores por lo que es posible utilizarlo en la constante printVehicle1 a la cual se le ha dicho que utilice el/los tipos de la interface Vehicle.

//Si cambiamos el valor por ejemplo de alguna propiedad de oldCivic1, entonces tendremos el mensaje de error correspondiente.Al igual debemos de mantener el nombre de la propiedad, de lo contrario obtendremos el mensaje de error debido a que ya no será perteneciente al tipo Vehicle, el cual establece el nombre de los valores y propiedades.

//FINALMENTE, PARA TENER UNA BUENA SINTAXIS, DEBEMOS SER COHERENTES CON NUESTROS RESULTADOS O LO QUE MOSTRAMOS EN PANTALLA, YA QUE VEMOS QUE VAMOS A TENER UN SUMMARY QUE DEVOLVERÁ UN STRING, LO CUAL NO TIENE NADA QUE VER CON INFORMACIÓN DE VEHÍCULOS, POR LO QUE SERÍA BUENO EN SU MOMENTO CAMBIAR LOS NOMBRES COMO SIGNO DE BUENAS PRÁCTICAS

printVehicle1(drink)
// Como vemos, el printVehicle1 espera argumentos de tipo Vehicle y dado que oldCivic1 y drink tienen en sus propiedades "summary", entonces pertenecen a ese tipo, sin importanr si en sus filas cuentan con más propiedades.

 //EN RESUMEN:
 //Tenemos una función printVehicle1 cuyos argumentos son de tipo Vehicle, por lo que los objetos oldCivic1 y drinks deben satisfacer a la interfaz Vehicle para trabajar con la función printVehicle1. Esto nos sirve como una estrategia para  generalizar nuestro código y ahorrarnos líneas y rehusar más. Por lo que todas las funciones que creemos van a aceptar interfaces tanto como sea posible, SIEMPRE QUE SEA NECESARIO