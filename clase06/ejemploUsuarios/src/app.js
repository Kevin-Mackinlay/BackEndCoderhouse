import express from 'express';

const app = express();
const PORT = 8080;

const usuarios = [
    {
        id:1,
        nombre:"pedro",
        apellido:"sanchez",
        edad:30
    },
    {
        id:2,
        nombre:"octavio",
        apellido:"santos",
        edad:35
    },
    {
        id:3,
        nombre:"luis",
        apellido:"moron",
        edad:20
    },
]

app.get("/",(req, res) => {
    res.json({
        msg:"Bienvenidos a la api de usuarios",
        data: usuarios,
    })
})

app.get("/usuario/:id", (req, res) => {
    const {id} = req.params;

    const existUser = usuarios.findIndex((user) => user.id === +id)

    if (existUser === -1){
        res.status(404).json({
            msg:"No se encontro el usuario",
            data: null,
        })
    }
    res.json({
        msg: "Usuario encontrado",
        data: usuarios [existUser],
    })
})

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})