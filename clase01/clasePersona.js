class Persona {
    constructor(nombre){
        this.nombre = nombre
    }

    static especie = 'humano'
    saludar(){
        console.log(`hola soy ${ this.nombre}`);
    }

    getEspecie(){
        
    }
}


