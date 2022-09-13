//Una clase es un Blueprint para crear un objeto con algunos campos(valores) y métodos(funciones) para representar "algo"

//Creamos una clase que represente a un vehículo, con mayúscula en la primera
class Vehicle{
  //Dentro de la clase vamos a definir varios métodos. Por ejemplo, ¿recuerdas los métodos de strings y arrays y eso? 
  
  //Acá estamos creando un método llamado drive, el cual es ejecutado en la última línea de este bloque, como vemos no tiene ningún argumento, únicamente va a mostrar en consola una cadena de texto
  drive():void{
    // No me queda claro por qué, pero podemos declarar una función sin ningún tipo de argumento de la manera que se presenta arriba, no se le coloca ninguna anotacion relacionada a los argumentos
    console.log("código prueba de instancia");
  }  

  honk():void{
  console.log("prueba de log");
  }
}

//Normalmente no ejecutamos a los métodos de las clases directamente sino que creamos la instancia de una clase con la palabra reservada "new" (guardamos su funcionalidad en una variable/constante y a partir de allí podemos utilizarla)
const vehicle = new Vehicle();

//Con esta instancia de la clase, tenemos acceso a todos los diferentes métodos que se definieron dentro de esta clase
vehicle.drive();
vehicle.honk();


////////////////////////////////////


//Creamos una nueva clase llamada Car que queremos que tena los mismos métodos que el de Vehicle, por lo tanto podemos copiar todo el código de nuevo, o lo mas apropiado: extender los métodos de la clase Vehicle en la clase Car, prácticamente se "copia y pega el código"
class Car extends Vehicle{}
// Normalmente se le dice a estas clases que son extensiones de otras; "Hijos", osea la clase Car es una clase hija de la clase padre Vehicle

// Instanciamos
const car= new Car();
car.drive()
car.honk();
//Como podemos notar, tenemos ahora todos los métodos de Vehicle en Car, podemos en su momento superponer los métodos si redefinimos estos en una segunda clase que se encuentre líneas debajo del código que hemos superpuesto (pisado)


////////////////////////////////////


// Empezamos a hablar de los modifiers que son palabras clave/reservadas para hacer que los métodos y propiedades de las clases sean públicas(por defecto), privadas o protegidas. Público: este método puede ser llamado donde sea cuando sea. Privado: este método puede ser llamado por otros métodos en esta clase. Protegido: este método puede ser llamado por otros métodos en esta clase o en clases hijas.

class Vehicle1{
   public drive():void{
        console.log("código prueba de instancia");
  }  
  public honk():void{
  console.log("prueba de log");
  }
}


//MODIFIER private: hemos puesto la clase Car1 en privada y por lo tanto sus métodos sólo pueden ser utilizados dentro de la clase
// Tenemos un error ya que el método drive tiene un modificador diferente que su clase padre, por lo que hay que modificarlo. Para efectos del curso y seguir la secuencia, omito arreglar este bloque de código
class Car1 extends Vehicle1{
  private drive():void{
    console.log("STRING PISADA POR CAR1");
  } 
  //El método stratDrivingProcess SÍ PUEDE LLAMAR a la función/método drive ya que se encuentra dentro de la case
  startDrivingProcess():void{
  // Acá sí podemos utilizar el método drive ya que estamos dentro de la clase
  this.drive()
  }
}

const car1= new Car1();
// No podemos utilizar el método drive ya que este es privado
// car1.drive()

// Como drive es privado, podemos hacer uso de otro método que está dentro del código y que llama al método drive. Sí podemos utilizar este método startDrivingProcess ya que es público en la clase Car1
car1.startDrivingProcess()

// La razón por la que se ponen algunos métodos en privado es para que no sean llamados por otros desarrolladores, ya que podrían haber algún tipo de bug o algo similar si alguien sin la experiencia de nosotros intenta llamarlos



// MODIFIER protected
class Vehicle2{ 
 color:string="red"
 protected honk():void{
 console.log("prueba de log");
 }
}

class Car2 extends Vehicle2{
  startDrivingProcess():void{
  // Acá sí podemos utilizar el método honk ya que Car2 es una clase hija de Vehicle2
  this.honk()
  }
}

// Nos podemos dar cuenta que debido a que el método honk es protected, no podemos llamarl fuera de la clase y de sus clases hijas
const vehicle2= new Vehicle2
vehicle2.honk() 



