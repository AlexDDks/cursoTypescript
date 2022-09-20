import faker from "faker" //Para importar a una libreria instalada con npm, tenemos que llamarla de este modo. Lo que hace es entrar a nuestra carpeta de node_modules, buscará el módulo correspondiente y agregará toda su funcionalidad a la variable faker (la que no tiene comillas)

// Le colocamos la palabra reservada export para que esta clase pueda ser importada en nuestro entrypoint
export class User{
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
}