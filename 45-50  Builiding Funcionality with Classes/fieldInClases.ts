// class Vehicle3{ 
//     color:string;
//     // Comenzamos a utilizar una función con palabra reservada constuctor, el cual es una función que se ejecuta inmediatamente cuando se instancia la clase. Recibe como argumento, lo que le demos de argumento cuando se instancie la clase
//     constructor(color:string){
//         this.color=color;
//     }

//     protected honk():void{
//     console.log("prueba de honk");
//     }
// } 

// // Acá estamos agregando como argumento un valor que utilizará el constructor para una función que nosotros queramos hacer. Esto es para inicializar una variable sin tenerlo que hacer directamente en la clase.
// const vehicle3 = new Vehicle3("orange")
// console.log(vehicle3.color)


// class Vehicle4{ 
//     // Una manera de minimizar el codigo es escribir el public color y esto es equivalente a crear un nuevo campo color con una anotacion y que adquiera como valor de la propiedad el argumento que se ha añadido al instanciarlo. OJOOOO, podemos usar cualquiera de los modificadores, no únicamente el public, teniendo un mismo resultado que el mostrado en el archivo classes
//     constructor(public color:string){}
//     protected honk():void{
//     console.log("prueba de honk");
//     }
// }
// const vehicle4 = new Vehicle4("black")
// console.log(vehicle4.color)


// ////////////////////////////////

class Vehicle5{ 
    constructor(public color:string){}
    protected honk():void{
    console.log("prueba de honk");
    }
}
const vehicle5 = new Vehicle5("black")
console.log(vehicle5.color)

class Car5 extends Vehicle5{
    // Cuando hagamos una función constructor de un hijo, debemos de llamar al constructor del padre con la palabra super(). Podemos observar que hemos agregado un segundo argumento llamador color, el cual está en el argumento de super. Esto se hace para: 1) super recibe como argumento lo que va a utilizar como propiedad en la clase padre, por lo que al nosotros colocar un segundo argumento en nuestro constructor, le decimos que esa será la propiedad que va a recibir el constructor padre. Nótese que hemos utilizado el mismo nombre de la variable como segundo argumento y como argumento del super. Así que cuando nosotros instanciemos, en ese momento los constructor van a ser ejecutados, como primer argumento el del hijo y como segundo el del padre
    constructor(public wheels:number, color:string){
        // No asignamos ningún modificador debido a que si colocamos un public por ejemplo, entonces crearemos una nueva propiedad en esta clase y lo que queremos es únicamente decir que al instanciar esta clase vamos a recibir 2 argumentos, el primero como cuenta con el modificador public, SÍ va a crear una nueva propiedad en esta clase, pero el segundo pertenece al padre y será la propiedad que se creará en esta última.
        super(color);
    }
}

const car5 = new Car5(4,"yellow")
//Acá comprobamos que todo está chido
console.log(car5.wheels, car5.color)