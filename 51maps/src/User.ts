// Faker is a library that "fakes" data
import { faker } from "@faker-js/faker";

// The class has two parameters, name and location
export class User {
    name:string;
    location:{
        lat:number;
        lng:number;
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