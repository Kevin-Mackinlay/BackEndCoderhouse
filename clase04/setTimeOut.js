const temporizador = (callback) => {
  setTimeout(() => {
    callback();
  }, 5000);
};

const laOperacion = () => console.log("la operacion termino");

console.log("inciando operacion");
temporizador(laOperacion);
console.log("finalizando operacion");
