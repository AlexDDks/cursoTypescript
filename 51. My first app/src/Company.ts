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