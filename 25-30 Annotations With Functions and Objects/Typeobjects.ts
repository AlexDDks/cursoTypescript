const profile={
  name:"alex",
  age: 20,
  coords: {
    lat:0,
    long:15
  },
  //Acá se está utilizando la notación E 2015 con la que definimos un método dentro de un objeto con el que vamos a cambiar la edad, no pude encontrar info acerca de esta notación, pero pues supongamos que así se hacen los objetos
  setAge (age:number):void { //Como sólo vamos a actualizar la edad, no vamos a tener un return
  this.age=age
  }
};

//Utilizamos el destructuring para jalar la propiedad age
const {age}:{age:number}=profile
console.log(age)

//Utilizamos el destructuring para jalar la propiedad lat y long dentro del objeto coords que está a su vez dentro del objeto profile. Utilizamos la estructura del profile para hacer las anotaciones correspondientes, esto nos sirve debido a que qué tal queremos hacer diferentes destructuring y estos son de tipos diferentes
const{coords:{lat, long}} : {coords:{lat:number, long:number}}= profile
console.log(lat,long);

// //ERROR DEL EJEMPLO ANTERIOR
// const {age,name}:{number}=profile 
// //Podemos observar el error debido a que el destructuring se está haciendo con 2 tipos de valores diferentes y únicamente colocamos la anotación para el primer argumento que sería un número, por lo tanto debemos declarar que X es un tipo, Y es otro tipo, etc