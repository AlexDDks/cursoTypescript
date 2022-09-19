// De esta manera se importa una clase en TS, lo que hace es ir al archivo ./User, buscar ahí algo llamado User y jalarlo a este archivo como una variable llamada User. SIEMPRE QUE EXPORTERMOS MEDIANTE LA PALABRA export, tenemos que colocar las llaves y dentro de ellas la variable que buscamos y a dónde se va a guardar. Esto no aplica para módulos de 3os, como el faker.
import {User} from "./User";   
import {Company} from "./Company";  
//Procedemos a instanciar el User (recordemos que no podemos utilizar una clase directamente, sino que debe ser instanciada en otra variable)
const user= new User();
console.log(user);

const company= new Company()
console.log(company);
