// Defining the type Mappeable
interface Mappeable{
    location:{
        lat:number;
        lng:number;
    };
}

// Creating the class Custom Map
export class CustomMap {
    // The propertie googleMap is private, just can be accessed into this class to have more security, because the object Map has a lot of methods that could be accessed by other developers (in the line 18, the instance is created), and it's type google.maps.Map that is avaliable because the ApiKey of google map is now in our project. From there is recuperated because is a global object
    private googleMap : google.maps.Map;

    // The constructor receives one parameter that is a HTML Element
    constructor(divId){
        // The propertie googleMap creates an instance ob the object Map. Reveives the HTML element, and some other parameters defined by documentation. This is the instance that contains the map and has many methods for working with it
        this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
            zoom:9,
            center:{
                lat:17.1583,
                lng:-92.3175
            }
        });     
    }
    // The method addMarker receives a parameter of the type Mappeable and doesn't returns anything. Also creates an instance of the class Marker
    addMarker(mappeable: Mappeable): void{
        new google.maps.Marker({
            // At this point googleMap already exists because the constructor has benn executed. And we can use this to access to properties and methods inside any place of this clase
            map: this.googleMap,
            position: {
                lat: mappeable.location.lat,
                lng: mappeable.location.lng
            }
        })
    }
}

