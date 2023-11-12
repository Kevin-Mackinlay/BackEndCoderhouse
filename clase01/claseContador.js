class contador {
    constructor(nombre){
    this.nombre = nombre;
    this.valor= 0
    contador.contadorGlobal ++
}

static contadorGlobal = 0;
static nacionalidad = "USA"

incrementar(){
    this.valor++
}

obtenerValor(){
    return this.valor
}

static obtenerContadorGlobal(){
    return contador.contadorGlobal
}

getResponsable(){
return this.nombre;
}
}

let contador1 = new contador("Kevin");
contador1.incrementar();
contador1.incrementar();
contador1.incrementar();
contador1.incrementar();

let contador2 = new contador("pepe");
contador2.incrementar();
contador2.incrementar();
contador2.incrementar();

console.log(contador1.obtenerValor());
console.log(contador.obtenerContadorGlobal());
console.log(contador2.obtenerValor());