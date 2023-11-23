const fs = require("fs");
const FILE_NAME = "./archivotexto.txt";

//si el archivo no existe, entonce lo crea y si existe lo sobreescribe
fs.writeFileSync(FILE_NAME, "cambiamos texto");

//existe el archivo?
if (fs.existsSync(FILE_NAME)) {

//leamos el archivo
  let contenidoDelArchivo = fs.readFileSync(FILE_NAME, "utf-8");
  console.log(contenidoDelArchivo);


//agregamos mas texto al archivo con append
  fs.appendFileSync(FILE_NAME, "Agregamos mas texto");
  let masContenido = fs.readFileSync(FILE_NAME, "utf-8")
  console.log(masContenido);


  //eliminamos el archivo con unlinkSync
  fs.unlinkSync(FILE_NAME)
}

//fs.readFile
//fs.writeFile
//fs.appendFile
//fs.unlink
//fs.existsSync
