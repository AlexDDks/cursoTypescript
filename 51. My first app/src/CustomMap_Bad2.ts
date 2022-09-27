//Se importan las clases para poder utilizar las instancias
import {User} from "./User"
import {Company} from "./Company"


// Acá estamos haciendo una clase que únicamente guarde las propiedades y métodos que necesitamos del objeto global Map. Esto es debido a que si otro ingeniero viene y comienza a trabajar en nuestro proyecto con todos los métodos que residen en esa clase, entonces el resultado podría ser catastrófico y pudiéramos llegar a romper por completo la app

// Creamos una clase para exportar que únicamente tenga las propiedades que necesitamos y así esconder el resto de la clase original Map
export class CustomMap{
    // La propiedad googleMap con todas sus propiedades y métodos/interfaces va a ser de tipo de la clase original pero PRIVADA, para que no pueda ser utilizada fuera de esta clase, es decir; que no se pueda acceder a Map.

    //La propiedad googleMap va a ser de tipo clase ..Map
private googleMap: google.maps.Map;

//Utilizamos el constructor para inicializar y crear el mapa y mostrarlo en pantalla
// En el constructor agregamos como argumento el div, que es lo que tenemos como argumento en el new, con ello podemos hacer nuestro código aún mas reutilizable  
constructor(divId:string){ //Acá iria el id del div, osea "map", pero debido a que se requiere hacer a este código algo más reusable, entonces se utiliza una nombre cualquiera que tendrá que ser el que iría en el getElementById. Esto es únicamente para hacer más reusable el código

    this.googleMap=new google.maps.Map(document.getElementById(divId) as HTMLElement,
    //En el get Element irá lo que coloquemos al instanciar, que será el divId osea "map"
       {
        zoom:1,
       
        center:{
            lat:0,
            lng:0 
        }
    });
}

// Lo que hicimos está explicado en la carpeta 45-50, archivo fieldInClases, sobre cómo utilizar el constructor


////////////////////OTRA MANERA NO TAN BUENA DE HACERLO///////////////////////////
// El Or indica que sólo podremos hacer uso de las propiedades que ambos User y Company compartan, que es en general: location que tiene lat y lng, no nos podremos referir a ninguna otra propiedad ya que limitará el número de propiedades a las que nos podamos referir. Estamos utilizando un argumento genérico que hará referencia a ya sea User o Company en el index.ts.
addMarker(instancer: User | Company): void{
    // Agregamos los argumentos para el constructor marker
    new google.maps.Marker({

// El problema con este código es que si en un futuro queremos hacer escalable el proyecto y queremos colocar más argumentos. Entonces cada uno de ellos va a tener que ser importado e instanciado en el archivo index.ts. Al igual tendremos que agregarlo como argumento en este método. Sí funciona este código pero no es escalable.

        map: this.googleMap,
        position:{
            lat:instancer.location.lat,
            lng:instancer.location.lng
        }
    });
}
///////////////////////////////////////////////////////////////////////
}