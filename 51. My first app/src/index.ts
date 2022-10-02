/// <reference types="@types/google.maps" />
// El por qué de la línea uno está explicado aquí:
// You can read about this in the official docs here:
// https://developers.google.com/maps/documentation/javascript/using-typescript#Module_Import

// De esta manera se importa una clase en TS, lo que hace es ir al archivo ./User, buscar ahí algo llamado User y jalarlo a este archivo como una variable llamada User. SIEMPRE QUE EXPORTERMOS MEDIANTE LA PALABRA export, tenemos que colocar las llaves y dentro de ellas la variable que buscamos y a dónde se va a guardar. Esto no aplica para módulos de 3os, como el faker.
import {User} from "./User";   
import {Company} from "./Company";  
//Procedemos a instanciar el User (recordemos que no podemos utilizar una clase directamente, sino que debe ser instanciada en otra variable)
const user= new User();
const company= new Company();

//Instanciamos la clase CustomMap proveniente del archivo customMap.ts
import { CustomMap } from "./CustomMap"; 
const customMap= new CustomMap("map"); //Colocamos como argumento el map, ya que es el divId correspondiente que se colocó en el class, esta instancia obligatoriamente necesitará un argumento por lo mismo que le hemos colocado argumentos al constructor!

 // customMap.googleMap- Podemos darnos cuenta que la propiedad a la que hacemos referencia no puede ser llamada debido a que es privada y sólo podrán ser utilizadas dentro de la clase

customMap.addMarker(user)
customMap.addMarker(company)