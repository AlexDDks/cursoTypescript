// Faker is a library that "fakes" data
import { faker } from "@faker-js/faker";
import { Mappeable } from "./CustomMap";

// The class has three parameters, name and location and a method, that must be required. The implements are used in order to a class achieve the requirements of an interface
export class Company implements Mappeable{
    companyName:string;
    catchPhrase:string;
    location:{
        lat:number;
        lng:number;
    };
    markerContent():string{
        return `Company name: ${this.companyName}`
    };


    // The constructor is executed, when the class is instanced
    constructor(){
        // The parameters are assigned by the library faker
        this.companyName = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            // The values of lat and lng are parsed because those came in strings
            lat : parseFloat(faker.address.latitude()),
            lng : parseFloat(faker.address.longitude())
        }
    }
}