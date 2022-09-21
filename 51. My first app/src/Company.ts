//Repetimos el proceso que hicimos para crear un User
import faker from "faker"
export class Company{
    companyName:string;
    catchPhrase:string;
    location:{
        lat:number;
        lng:number;
    }
    // Para instanciarlo utilizamos el constructor
    constructor(){//No ponemos argumentos, ya que eso sería para instanciarlo mediante argumentos mediante el new("acá irían los argumentos")
        this.companyName=faker.company.companyName();
        this.catchPhrase=faker.company.catchPhrase();
        this.location={
            lat:parseFloat(faker.address.latitude()),
            lng:parseFloat(faker.address.longitude())
        }
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