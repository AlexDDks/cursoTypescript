import faker from "faker" //Para importar a una libreria instalada con npm, tenemos que llamarla de este modo. Lo que hace es entrar a nuestra carpeta de node_modules, buscará el módulo correspondiente y agregará toda su funcionalidad a la variable faker (la que no tiene comillas)
import {Instancer} from "./CustomMap" //Importamos la interface para darle más pistas a TS de que la clase User satisfaga las condiciones de la interface Instancer

// Le colocamos la palabra reservada export para que esta clase pueda ser importada en nuestro entrypoint
export class User implements Instancer{
    //implements Instancer le dice a TS que esta clase debe de satisfacer las propiedades de la interface Instancer, así cuando tengamos un error en la instancia de esta clase por ejemplo y nos falte satisfacer alguna propiedad correspondiente, entonces TS nos dirá cuál es es el error y dónde se encuentra, lo cual hace que todo sea relativamente más fácil.
    name: string;
    location:{
        // En la documentación veremos que el faker entrega un string para las funciones latitud y longitud, por lo que tendremos que hacer la correspondiente conversión de string a number, lo cual hicimos en el constructor
        lat:number;
        lng:number;
    }

    // En la documentación vamos a encontrar qué modulo utilizar para cada propiedad de nuestra clase, por lo que basta revisarlo para ver cómo llegar a ella.
    
    //En este paso indicamos el valor de las propiedades las cuales serán inicializadas cuando se instancie la clase en el archivo index.ts
    constructor(){
        this.name=faker.name.firstName();
        this.location={
            lat:parseFloat(faker.address.latitude()),
            lng:parseFloat(faker.address.longitude())
            // Utilizamos el parseFloat para convertir a number el string que nos devuelven las funciones latitude y longitude de faker
        }
    }

    markerContent():string{
        return "User's name is: " + this.name;
    }
}

// // En JS el constructor se coloca como:

// function Cliente(nombre, fecha, direccion) // { Esta línea funciona como la palabra reservada constructor(), pero no recibe parámetros ya que se inicializa cuando la clase es instanciada en el index.ts
 
//     this._nombre = nombre;
//     this._fechaNacimiento = fecha;
//     this._direccion = direccion;
// }

// // Instanciando:

// const cliente= new Cliente(nombre, fecha, direccion)