let miArreglo =[1,2,3,4,5,6,];

let nuevoArreglo = miArreglo.map((elemento) => elemento * 2);

let nuevoCalculo = miArreglo.map((x) => x + 1);

let reemplazoValor = miArreglo.map((dato) => "a")

// console.log(nuevoArreglo);
// console.log(reemplazoValor);


function isEven(valor){
    if (typeof valor == "number"){
        return valor %2 == 0;

    }else{
        return false;
    }
}

console.log(isEven(2));
console.log(isEven(5));

let arregloParInpar = miArreglo.map(isEven)

console.log(miArreglo);
console.log(arregloParInpar);

