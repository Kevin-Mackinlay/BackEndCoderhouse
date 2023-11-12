class nombreDeMiClase {
  constructor(parametrosDeInicializacion) {
    console.log("nuevo/a clase/ objeto");

    this.variableInterna = 5;
  }

  static variableEstatica = 8 
  metodo1(){
    console.log('holamundo');
  }

  metodo2(){
    console.log(`hola ${this.variableInterna}`);
  }
}


let instancia = new nombreDeMiClase();
console.log(instancia.variableInterna);
instancia.metodo1();
instancia.metodo2();


let instanciaDos = new nombreDeMiClase();

let instanciaTres = new nombreDeMiClase();