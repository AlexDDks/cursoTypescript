class Carx {
   private text():void{
        console.log("Texto de prueba");
        
    }
    caller():void{
        this.text()
    }

}

const carx = new Carx();
carx.caller();

