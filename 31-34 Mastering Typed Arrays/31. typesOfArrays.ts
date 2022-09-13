// En general cuando usamos arrays en TS, sólo utilizamos un tipo, si quieremos agregar más, entonces tenemos que agregar anotaciones especiales

// Acá la inferencia ya está trabajando, no es necesario agregar anotaciones
const carMakers=["Ford", "Toyota", "Nissan"]

// Acá sí necesitamos colocar anotaciones ya que se cumple el segundo punto de cuándo utilizar anotaciones ya que la variable no está inicializada en este momento
const carMakers1:string[]=[]

// Podemos utilizar elementos especiales como el objeto Date y TS inferirá el tipo
const dates=[new Date, new Date]

// Podemos utilizar arrays dobles y TS inferirá también, pero podemos agregar igualmente una anotación con fines didácticos ya que no tenemos por qué hacerlo si es que hay inferencias
const dobleArray:string[][]=[
  ["x"],
  ["x"],
  ["x"]
]


// ¿POR QUÉ ES IMPORTANTE CONOCER DE TS EN ARRAYS?
//HELP WITH INFERENCE WHEN EXTRACTING VALUES
//Si nosotros extraemos un valor con algún método de un array, entonces TS inferirá que ese valor es de el tipo del que estaba el array original

//Podemos notar que ahora TS ha inferido que el valor en car el cual fue extraído es de un tipo string
const car=carMakers[0]

// Aca TS también ha inferido sobre que se trata de un valor string
const myCar= carMakers.pop()


//PREVENT INCOMPATIBLE VALUES
// Ts nos ayuda a darnos cuenta que no podemos añadir a un array de cierto tipo valores de otro incompatible
carMakers.push(1000)


//HELP WITH METHODS
// Gracias a que se ha anotado que car es string, podemos obtener ayuda de TS cuando nosotros ponemos por ejemplo "car." nos saldrán múltiples opciones a elegir los cuales son métodos de strings y no de otro tipo de valores
carMakers.map((car:string):string=>{
  return car
})



//FLEXIBLE TYPES
//Acá utilizamos anotaciones para poder contener en un array valores de diferentes tipos, aunque a veces TS infiere los diferentes tipos, es recomendable utilizar anotaciones
const differentTypes:(Date | string)[]=[new Date(), 'text']
// Al utilizar el método push podemos utilizar los tipos que hemos anotado
differentTypes.push('anotherText')
differentTypes.push(new Date())
// Si queremos utilizar otro tipo, obtendremos el error respectivo de parte de TS
differentTypes.push(100)
