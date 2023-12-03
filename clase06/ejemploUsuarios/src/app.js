import express from 'express';

const app = express();
const PORT = 8080;

const usuarios = [
    {
        id:1,
        nombre:"pedro",
        apellido:"sanchez",
        edad:30,
        genero:"M"
    },
    {
        id:2,
        nombre:"octavia",
        apellido:"santos",
        edad:35,
         genero:"F"
    },
    {
        id:3,
        nombre:"luis",
        apellido:"moron",
        edad:20,
         genero:"M"
    },
]

app.get("/",(req, res) => {
    let temporalUsers = usuarios;

    const {genero} = req.query;
    if(genero){
        temporalUsers = temporalUsers.filter( user => user.genero.toLowerCase() === genero.toLowerCase())
    }
    
    res.json({
        msg:"Bienvenidos a la api de usuarios",
        data: temporalUsers,
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