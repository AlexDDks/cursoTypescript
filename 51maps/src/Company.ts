// Faker is a library that "fakes" data
import { faker } from "@faker-js/faker";

// The class has tree parameters
export class Company {
    companyName:string;
    catchPhrase:string;
    location:{
        lat:number;
        lng:number;
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