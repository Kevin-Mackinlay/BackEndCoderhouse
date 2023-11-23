const fs = require("fs")

const FILE_NAME= "./archivoConCallbacks.txt";

const existFile = fs.existsSync(FILE_NAME);

fs.writeFile(FILE_NAME, "Hola Mundo", (error) => {
    if (error) {
        console.log("Error al escribir el archivo                                                                                                                                                                                                                                                                                                            ");
    }
})