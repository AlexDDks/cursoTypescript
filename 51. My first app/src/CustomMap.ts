// Acá estamos haciendo una clase que únicamente guarde las propiedades y métodos que necesitamos del objeto global Map. Esto es debido a que si otro ingeniero viene y comienza a trabajar en nuestro proyecto con todos los métodos que residen en esa clase, entonces el resultado podría ser catastrófico y pudiéramos llegar a romper por completo la app

// Creamos una clase para exportar que únicamente tenga las propiedades que necesitamos y así esconder el resto de la clase original Map
export class CustomMap{
    // La propiedad googleMap va a ser de tipo de la clase original pero PRIVADA, para que no pueda ser utilizada fuera de esta clase, es decir; que no se pueda acceder a Map
private googleMap: google.maps.Map;

// En el constructor agregamos como argumento el div, que es lo que tenemos como argumento en el new, con ello podemos hacer nuestro código aún mas reutilizable
constructor(divId:string){ //Acá iria el id del div, osea "map"
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
}