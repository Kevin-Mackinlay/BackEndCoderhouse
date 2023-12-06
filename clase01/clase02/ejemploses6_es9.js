const tiendas = [
    {
        manzanas:2,
        peras:2,
        carne:3,
        jugos:5,
    }
    ,
    {
        manzanas:1,
        sandias:1,
        peras:2,
        panes:3
    }
]

let productos = []


tiendas.forEach((tienda) => {
    productos = new Set([Object.keys(tienda), ...productos])
})

console.log(productos);