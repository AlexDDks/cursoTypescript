/// <reference types="@types/google.maps" />
// El por qué de la línea uno está explicado aquí:
// You can read about this in the official docs here:
// https://developers.google.com/maps/documentation/javascript/using-typescript#Module_Import

// De esta manera se importa una clase en TS, lo que hace es ir al archivo ./User, buscar ahí algo llamado User y jalarlo a este archivo como una variable llamada User. SIEMPRE QUE EXPORTERMOS MEDIANTE LA PALABRA export, tenemos que colocar las llaves y dentro de ellas la variable que buscamos y a dónde se va a guardar. Esto no aplica para módulos de 3os, como el faker.
import {User} from "./User";   
import {Company} from "./Company";  
//Procedemos a instanciar el User (recordemos que no podemos utilizar una clase directamente, sino que debe ser instanciada en otra variable)
const user= new User();
console.log(user);

const company= new Company();
console.log(company);


/////////TODA ESTA SECCIÓN DE CÓDIGO SE TRASLADÓ A LA CLASE CustomMap/////////////

// // // Al igual como hicimos con el faker, podemos entrar a las propiedades de este ¿objeto? y en base a eso conocer las propiedades que utilizaremos, en este caso necesitamos el map del maps. En el caso de que los argumentos tengan un ? significa como en las rutas paramétricas, que son opcionales.

// //La propiedad map espera un argumento que es un div de un html que es donde el mapa va a ser renderizado dentro del documento HTML, por lo que necesitamos en el index.html agregar un div para almacenar el map. Si me doy cuenta tuve un mensaje de error ya que el getEle.... tiene como parámetros un null o un HTMLElement, sin embargo Map sólo tiene como parámetro HTMLElemento, ya no más el null, por lo que se le especifica con el "as HTMLElement" para evitar ese error
// const map = new google.maps.Map(document.getElementById('map') as HTMLElement,
// // Abriendo unas nuevas llaves, aclaramos que agregaremos un segundo parámetro(la hacemos así porque el segundo argumento es una interface, lo cual tiene su modo de ser ingresado)
// {
//     //la clase Map opcionalmente recibe como segundo parámetro el mapOptions que sirve para personalizar el mapa, por lo tanto debemos de ingresarlas desde unas llaves, ya que es un segundo parámetro. La propiedad zoom recibe como parámetro un number que es el valor inicial de este.
//     zoom:1,
//     // Agregaremos otra propiedad llamada center la cual vimos en la clase Map.mapOptions que es un objeto que tiene long y lat como numbers
//     center:{
//         lat:0,
//         lng:0 //El centro del mapa será 0,0.
//     }
// });
// // La lógica es la siguiente: lo que le demos de argumentos al constructor lo agregará como una propiedad de la clase, en este caso le estamos agregando como primer argumento "map", el cual en el tdf vimos que DEBE DE SER UN ELEMENTO HTML por lo que anteriormente se inicializó como ello. Como segundo argumento se le está agregando un objeto llamado "mapOptions", el cual tiene 2 propiedades que necesitamos: 1)zoom:number y 2:center:lat y lng, todo esto sacado del tdf

//////////////////////////////////////////////////////////////////////////////////////

//Instanciamos la clase CustomMap proveniente del archivo customMap.ts
import { CustomMap } from "./CustomMap"; //ESTE ES EL IMPORT DEL MAL CAMINO
const customMap= new CustomMap("map"); //Colocamos como argumento el map, ya que es el divId correspondiente que se colocó en el class, esta instancia obligatoriamente necesitará un argumento por lo mismo que le hemos colocado argumentos al constructor!

// customMap.googleMap - Podemos darnos cuenta que la propiedad a la que hacemos referencia no puede ser llamada debido a que es privada y sólo podrán ser utilizadas dentro de la clase


// ////////////ESTA SECCIÓN ES PARTE DE LA PARTE MAL IMPLEMENTADA EN CustomMap_Bad.ts//////////////

// //Finalmente ejecutamos la función (método) de customMap.addmarkers que es donde tenemos la funcionalidad de las ubicaciones
// customMap.addUserMarker(user)
// customMap.addCompanyMarker(company)

// ////////////TERMINA SECCIÓN DE LA PARTE MAL IMPLEMENTADA EN CustomMap_Bad.ts//////////////

customMap.addMarker(user)
customMap.addMarker(company)