// Faker is a library that "fakes" data
import { faker } from "@faker-js/faker";

// Importing the interface to help TS to know more about the errors. If something is missing, TS know can know where
import { Mappeable } from "./CustomMap";

// The class has two parameters, name and location and a method, that must be required. The implements are used in order to a class achieve the requirements of an interface
export class User implements Mappeable {
    name:string;
    location:{
        lat:number;
        lng:number;
    };

    markerContent():string{
        return `User name: ${this.name}`
    };

    // The constructor is executed, when the class is instanced
    constructor(){
        // The name and parameters are assigned by the library faker
        this.name = faker.name.firstName();
        this.location = {
            // The values of lat and lng are parsed because those came in strings
            lat : parseFloat(faker.address.latitude()),
            lng : parseFloat(faker.address.longitude())
        }
    }
}