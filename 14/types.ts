const today = new Date();
const valor= today.getDay();
console.log(valor)

// today.jasasjka;
// //Como no existe en el tipo date, la propiedad jasasjka no puede ser utilizada y ts nos manda un error

const person = {
age:33
}

// person.sdasdasd
// //Si hacemos referencia a una propiedad inexistente, ts nos mandará el error

class color{

}

const red = new color()
// Si pasamos el mouse sobre red, entonces apunta a la variable que es de tipo color
// Es decir que la variable red tiene acceso a todas las propiedades y métodos del objeto de clase color
// en este caso ninguna ya que no se le implementado nada