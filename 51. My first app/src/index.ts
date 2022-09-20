/// <reference types="@types/google.maps" />

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

// // Al igual como hicimos con el faker, podemos entrar a las propiedades de este ¿objeto? y en base a eso conocer las propiedades que utilizaremos, en este caso necesitamos el map del maps. En el caso de que los argumentos tengan un ? significa como en las rutas paramétricas, que son opcionales.

// //Instanciamos la clase(en el tdf vimos que es una clase) con esta nueva forma que la verdad no sé cómo se usa
// new google.maps.Map(document.getElementById('map') as HTMLElement,
// // Abriendo unas nuevas llaves, aclaramos que agregaremos un segundo parámetro
// {
//     //la clase Map opcionalmente recibe como segundo parámetro el mapOptions que sirve para personalizar el mapa, por lo tanto debemos de ingresarlas desde unas llaves, ya que es un segundo parámetro. El zoom recibe como parámetro un number que es el valor inicial de este.
//     zoom:1,
//     // Agregaremos otra propiedad llamada center la cual vimos en la clase Map.mapOptions que es un objeto que tiene long y lat como numbers
//     center:{
//         lat:0,
//         lng:0 //El centro del mapa será 0,0.
//     }
// });
// //map espera un argumento que es un div de un html, por lo que necesitamos en el index.html agregar un div para almacenar el map. Si me doy cuenta tuve un mensaje de error ya que el getEle.... tiene como parámetros un null o un HTMLElement, sin embargo Map sólo tiene como parámetro HTMLElemento, ya no más el null, por lo que se le especifica con el "as HTMLElement" para evitar ese error

const map = document.getElementById('map') as HTMLElement;
 
new google.maps.Map(map, {
  center: { lat: 0, lng: 0 },
  zoom: 1,
});