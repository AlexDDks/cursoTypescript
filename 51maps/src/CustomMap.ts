// Defining the Mappeable interface to standardize objects that include a location
export interface Mappeable {
    location: {
        lat: number;
        lng: number;
    };
    markerContent():string;
}

// Creating the CustomMap class to encapsulate the Google Map functionality
export class CustomMap {
    // The googleMap property is private to restrict access within this class,
    // ensuring more security since the Map object has numerous methods that could be accessed by other developers.
    private googleMap: google.maps.Map;

    // The constructor receives a parameter, divId, which is the ID of an HTML element.
    // The type string is required here to ensure the correct type is passed.
    // It initializes the googleMap property with a new Map instance.
    constructor(divId: string) {
        // Type assertion (as HTMLElement) ensures that the element is treated as an HTML element
        // The types for lat and lng are inferred here as numbers
        this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
            zoom: 2,  // Initial zoom level for the map
            center: {
                lat: 17.15,  // Initial latitude for the map center
                lng: -92.31  // Initial longitude for the map center
            }
        });
    }

    // The addMarker method adds a marker to the map at the specified location.
    // It accepts a Mappeable object and uses its location to place the marker.
    // The return type void is specified explicitly to indicate that this method does not return a value.
    addMarker(mappeable: Mappeable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,  // Reference to the map where the marker will be added
            position: {
                // The types for lat and lng are inferred from the Mappeable interface
                lat: mappeable.location.lat,  // Latitude for the marker position
                lng: mappeable.location.lng   // Longitude for the marker position
            }
        });

        // Based on documentation: here is a listener over the markers, every time the user clicks over there, an instance of infoWindow is created with a defined content      
        marker.addListener('click', () =>{
            const infoWindow = new google.maps.InfoWindow({
                // The content is part of the instance of user or company or anything that is passed to the function addMarker. Its definition is into the respective class 
                content: mappeable.markerContent()
            })
            // This is part of documentation
            infoWindow.open(this.googleMap, marker);
        })
    }
}
