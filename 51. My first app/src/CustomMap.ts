//Ver explicación del código en customMap_Bad.ts

//Ahora en vez que el método addMarker sea el que se tiene que acomodar a User y Company, serán estas y cualquier otra clase interesada en ser llamada desde addMarker las que tendrán que satisfacer una interface teniendo las correctas propiedades, nombres y tipos.

//Instrucciones para otras clases de cómo ser un argumento de addMarker
export interface Instancer{
    location:{
        lat: number;
        lng: number;
    };

    //Para poder personalizar el texto que se va a renderizar vamos a agregar otra propiedad a esta interfaz:
    markerContent():string;
}

export class CustomMap{
    private googleMap: google.maps.Map;

    constructor(divId:string){ 
    this.googleMap=new google.maps.Map(document.getElementById(divId) as HTMLElement,
        {
        zoom:1,
            center:{
            lat:0,
            lng:0 
            }
        });
    }

    //add Marker ahora puede recibir CUALQUIER ARGUMENTO SIEMPRE Y CUANDO SATISFAGA A LA INTERFACE INSTANCER 
addMarker(instancer:Instancer): void{
     const marker= new google.maps.Marker({
        map: this.googleMap,
        position:{
            lat:instancer.location.lat,
            lng:instancer.location.lng
            }
        });

        // Acá comenzamos a agregar la funcionalidad de que cuando hagamos click en los marcadores, salga un TextDecoder. Para ello agregamos como el addListener la funcionalidad de que al hacer click en el marker se ejecute una función. Para que se renderice el texto hacemos uso de la clase InfoWindow que en el tdf vemos que recibe un content que es una propiedad de tipo string(que será el texto a renderizar)
        marker.addListener("click", () => {
            const infoWindow= new google.maps.InfoWindow({
                // Como contenido ahora hemos reemplazado el string y lo que hacemos es ejecutar a la función markerContent del argumento correspondiente, lo cual nos entregará el string personalizado
                content: instancer.markerContent()
            });
            //infoWindow.open recibe las referencias de a qué marcador y mapa nos referimos, por lo que agregamos como argumento el mapa al que le estamos implementando la funcionalidad y el marcador correspondiente.
            infoWindow.open(this.googleMap, marker)
        });

    }
}