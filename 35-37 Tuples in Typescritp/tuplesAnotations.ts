// A diferencia de los arrays las tuplas contiene múltiples propiedades para describir una cosa

// Digamos que si partimos de un objeto literal con las siguientes propiedades y valores:
const coke={
  color: "black",
  carbonated: true,
  sugar:40
}
// Tenemos la información clara y concisa, pero en las tuplas, únicamente tenemos los valores de esas propiedades y es nuestro deber como programadores el memorizar a qué propiedad pertenece cada valor. Podemos notar que en una tupla, tenemos una pérdida de información con respecto a los arrays, la cual es la propiedad o clave. Si cambiamos la posición de cada elemento de la tupla, entonces podríamos confundirnos sobre qué intenta representar ese valor:
// const features= ["black", true, 40]

// Si bien TS ya ha inferido, nosotros debemos de indicarle que no se trata de un Array, sino de una tupla, el cual tendrá un orden definido e intercambiable, lo cual se hace de la siguiente manera:
const features:[string, boolean, number]= ["black", true, 40]

// Si intentamos cambiar el orden de los elementos entonces tendremos el error correspondiente:
features[0]=40

// Existe una manera en la que no vamos a necesitar anotar los tipos en cada tupla: podemos declarar que tendremos un tipo de nombre "x" y posteriormente inicializar sus valores con los tipos que vamos a utilizar:
type drinks=[string, boolean, number]

// Y cuando inicialicemos una tupla, la manera de asignar las anotaciones será utilizando el recurso anterior:
const pepsi:drinks=["black", true, 30]
//Lo anterior es un recurso llamado alias

//Es mejor utilizar objetos que tuplas para designar valores a las propiedades de cierto registro, ya que es muy dificil como ingenieros saber a qué se refieren los valores sin mirar las propiedades como en el caso de los objetos literales.





