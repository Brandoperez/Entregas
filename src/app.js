import express  from "express";
import ProductManager from "../productManager.js";

const app = express();
const manager = new ProductManager();

app.get('/productos', (req,res) =>{
    res.send("Hola estamos probando express")
})
    app.listen(8080, () => console.log("server arriba desde app"))

app.get('/productos/:idUsuario', (req,res) =>{
        let capturarUsuario = req.params.id

        let IdFiltrado = usuarios.find(u => u.id === capturarUsuario)

        if(!IdFiltrado) return res.send({error: "Usuario no encontrado"})
        res.send({IdFiltrado})

    })
        app.listen(8080, () => console.log("server arriba"))