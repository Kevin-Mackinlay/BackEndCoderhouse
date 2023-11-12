// let people = [
//   { id: 1, first_name: "pepe", last_name: "dilon", age: 23, gender: "M" },
//   { id: 1, first_name: "derek", last_name: "fgfssn", age: 24, gender: "M" },
//   { id: 1, first_name: "jospeh", last_name: "dssff", age: 33, gender: "M" },
//   { id: 1, first_name: "Juan", last_name: "hhhhfd", age: 43, gender: "M" },
// ];

// let i = 0;

// function miFuncion() {
//   i = i + 1
//   let j = 2 
//   if(true){
//     console.log(i);
//     console.log(j);
//   }
// }

// miFuncion()

// // const ejemplos

// // const nombre = " luis";
// // const apellido = "sanchez";
// // const VALOR_GANANCIA= 0.40;


// function saludar() {
//   return  "hola";
// }



// const saludarFlecha = () => {
//   console.log("hola con funcion flecha");
// }

// saludar();
// saludarFlecha();

// const multiplicar = (a,b) => a*b;
// console.log(multiplicar(5,6));

/******TEMPLATE STRINGS***/

// let nombre= 'juan';
// let apellido='mandela';
// let descripcion = `Mi nombre es ${nombre} ${apellido}`;
// console.log(descripcion);


/*********Hands on lab**** */

function saludar() {
  return  "hola";
}

let alumnos = [
  'daniel', 'fran', 'agustin', 'tomas', 'santiago'
]



function mostrarLista (estudiantes) {
  if (estudiantes.length === 0){
    console.log('lista vacia') ;
  } else {
for (let x=0; x>estudiantes.length; x++){
  let descripcion = `${saludar()} ${estudiantes[x]}, que bueno tenerte en clase`;
  console.log(descripcion);
}
  }
  console.log("la longitud es ", estudiantes.length);
}

mostrarLista(alumnos)

/*********CLOSURE**** */

// console.log(saludo);
// var saludo = "Hola mundo";
// console.log(saludo);




















