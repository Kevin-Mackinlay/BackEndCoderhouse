let objeto1={
propiedad1:2,
propiedad2:"b",
propiedad3:true,
}

let objeto2={
    propiedad1:"c",
    propiedad2:[2,3,4,5,6,7],



}


// let {propiedad1} = objeto1;
// console.log("propiedad 1 ", propiedad1);
// console.log("objeto y propiedad", objeto1.propiedad1);

// let onjeto3 = {
//     ...objeto1,
//     ...objeto2,
// };

// console.log(object3);


let objeto4 ={
    a:1,
    b:2,
    c:3,
};

let {a, ...rest} = objeto4;

console.log(rest);