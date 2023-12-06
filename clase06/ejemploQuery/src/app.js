import express from "express";

const app = express();
const PORT = 8080;

app.use(express.urlencoded({
    extend: true 
}));
app.get("/ejemploqueries", (req, res) => {
    let consultas = req.query;
    console.log(consultas);
    const {nombre, apellido} = req.query;
    res.json(consultas);
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})