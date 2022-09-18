//Con faker lo que haremos es darle valores random a las propiedades que nosotros coloquemos en nuestra clase, por ejemplo nombre, longitud y latitud, por lo que vamos a importarlo:

import faker from "faker"
//Lo que hace esta línea es entrar al node modules y de ahí acceder al faker que hemos instalado anteriormente y con ello tener acceso a todo el código dentro

//Recordemos que podemos utilizr librerias comunes de JS en código TS, usando NPM, sin embargo si recordamos que TS es un tipo de código de anotaciones, TS necesita saber con qué tipos estamos tratando, pero JS no le provee esa información, así que para resolverlo usa los "Type definition file", los cuales son un tipo de "adaptador" entre código de TS y las librerias de JS con las que queremos trabajar. Un definition file le dice a TS qué tipo de argumentos yacen dentro de la libreria de JS y qué tipo de valores las funciones retornan. Estos Type definition files deben ser isntalados manualmente sino se nos incluyen. Esto se hace con el npm @types/faker o libreria correspondiente
class User {
name:string;
location: {
    lat:number;
    lng:number;
};
constructor(){
    this.name=faker.name.firstName();

    // Debido a que anteriormente no inicializamos nuestro location, TS no sabe que se trata de un objeto por lo que la inicializamos al igual que inicializamos el name anterior
    this.location={
        // Debido a cómo fue creado, lat y lgn son strings en el faker, pero nosotros le hemos dicho a TS mediante anotaciones que espere un número, entonces con el parseFloat se convierte a number un string dado
        lat: parseFloat(faker.address.latitude()),
        lng: parseFloat(faker.address.longitude())
    }

}
}