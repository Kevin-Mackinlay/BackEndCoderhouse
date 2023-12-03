import express from "express";

const app = express()
;

const PORT = 8080;

app.get("/", (req,res) => {
    res.send("hola a todos mi primera api express")
});

app.get("/saludo", (req, res) => {
    res.send("saludo a todos")

})

app.get("/usuario", (req, res) => {
    const usuario = {
        name: "kevin",
        lastname :" Mackinlay",
        age:"40"
    }
    res.json(usuario);

});

app.get("/Bienvenida", (req, res) => {
    res.send('<h1 style="color:red;"> Bienvenidos a la clase de express</h1>')

})

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})