//Repetimos el proceso que hicimos para crear un User
import faker from "faker"
import {Instancer} from "./CustomMap"//Importamos la interface para darle más pistas a TS de que la clase User satisfaga las condiciones de la interface Instancer

export class Company implements Instancer{
     //implements Instancer le dice a TS que esta clase debe de satisfacer las propiedades de la interface Instancer, así cuando tengamos un error en la instancia de esta clase por ejemplo y nos falte satisfacer alguna propiedad correspondiente, entonces TS nos dirá cuál es es el error y dónde se encuentra, lo cual hace que todo sea relativamente más fácil.
    companyName:string;
    catchPhrase:string;
    location:{
        lat:number;
        lng:number;
    }
    // Para inicializar las propiedades utilizamos el constructor
    constructor(){//No ponemos argumentos, ya que eso sería para instanciarlo mediante argumentos mediante el new("acá irían los argumentos")
        this.companyName=faker.company.companyName();
        this.catchPhrase=faker.company.catchPhrase();
        this.location={
            lat:19.335072,
            // parseFloat(faker.address.latitude()),
            lng:-99.186490
            // parseFloat(faker.address.longitude())
        }
    }

    // Agregamos el método necesario para que se cumpla que estos pertenezcan a la interfaz. Recordemos que hacemos esto para personalizar el mensaje que será renderizado por el marker cuando se realice el evento de hacer click
    markerContent():string{
        return "Company's name is: " + this.companyName +
        ", and the phrase is: " + this.catchPhrase;
    }
}

