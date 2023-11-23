const temporizador = (callback) => {
  setInterval(() => {
    callback();
  }, 1000);
};


//ojo ciclo infinito


const laOperacion = () => console.log("la operacion termino");
console.log("iniciando");

temporizador(laOperacion)
console.log("finalizando");
