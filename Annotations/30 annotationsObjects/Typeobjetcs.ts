const profile={
  name:"alex",
  age: 20,
  coords: {
    lat:0,
    long:15
  },
  setAge (age:number):void {
//Acá se está utilizando la notación E 2015 con la que definimos un método dentro de un objeto
this.age=age
  }
};

const {age}:{age:number}=profile 
//Utilizamos el destructuring E2015 para jalar la propiedad age, y utilizamos esa sintaxis ya que estamos jalando valores de una propiedad
//Cuando utilizamos el destructuring eso se necesita

const{coords:{lat, long}} : {coords:{lat:number, long:number}}= profile
//Utilizamos el destructuring E2015 para jalar la propiedad lat y long dentro del objeto coords que está a su vez dentro del objeto profile
//Utilizamos la estructura del profile para hacer las anotaciones correspondientes, esto nos sirve debido a que qué tal queremos hacer diferentes destructuring y estos son de tipos diferentes

//ERROR DEL EJEMPLO ANTERIOR
const {age,name}:{number}=profile 
//Podemos observar el error, por lo tanto debemos declarar que X es un tipo, Y es otro tipo, etc