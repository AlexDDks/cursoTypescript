/// <reference types="@types/google.maps" />

// Imports of the classes
import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from './CustomMap';

// Instances of each class. Each one now has the properties and methods os their respective classes
const user = new User();
const company = new Company();

// Here we are "instanciando" the class CustomMap and the Map is rendered
const customMap = new CustomMap('map');

// Executing the method addMarker in the instance of CustomMap
customMap.addMarker(user);
customMap.addMarker(company);

