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



//////////////////MAL CAMINO////////////////////
//Comenzaremos a diseñar los marcadores, aunque este es el mal camino:

// El enfoque que se le quiere dar es el de agregar dos métodos, uno para cada clase; User y Company. Le decimos que va a ser de ese tipo YA QUE POSTERIORMENTE EN EL index.ts VAMOS A EJECUTAR LOS MÉTODOS Y LOS ARGUMENTOS SERÁN LAS INSTANCIAS DE ESAS 2 CLASES

//Se coloca como argumento la instancia, y el tipo va a ser la clase. Sí, la clase(la instancia) tiene como dualidad también ser un "tipo", así que podemos usarlo y al mismo tiempo vamos a tener como return un : void
//El nombre del argumento puede ser el que sea, pero el tipo debe ser de su clase correspondiente, porque en el index.ts vamos a ejecutar los métodos y estos van a recibir como argumentos a las instancias de User y Company
addUserMarker(user:User): void{
    // En el tdf se encuentra una clase llamada market. Cuando queramos crear una instancia de marker, podemos opcionalmente colocar argumentos llamados "opts" que deberían ser conformados por la interface markerOptions(por lo que van entre llaves como objeto literal). El primero es map, el cuál recibe el mapa al que se le añadirá al marcador (ya que en una app podríamos tener diferentes mapas) y la segunda es la posición como objeto literal con lat y lng.

    //Creamos la instancia del marker(ya que es una clase) y ya tenemos inmediatamente todas las propiedades de Marker, y tendremos como argumentos lo que necesita/solicita la función constructora en el tdf
    new google.maps.Marker({
        map:this.googleMap, //Utilizamos el .this, porque si nos damos cuenta, seguimos dentro del mismo bloque de código
        position:{
            lat:user.location.lat,
            lng:user.location.lng
        }

    })
}

addCompanyMarker(company:Company): void{
//Repetimos el código:

new google.maps.Marker({
    map:this.googleMap,
    position:{
        lat:company.location.lat,
        lng:company.location.lng
    }

})
    

}




}

/////////////////////////////////////////////////