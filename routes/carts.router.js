import { Router } from "express";
const archivo = '../archivoProductos/carrito.json';

const router = Router();

const carts = [];



router.get('/api/carts/:id', (req, res) =>{
    let idCapturado = req.params.idProducto;

        let productoFiltrado = products.find(p => p.id === idCapturado)
            if(!productoFiltrado) return res.send({error: "Producto no encontrado"})
            res.send({productoFiltrado});
})

router.post('/api/carts', (req, res) =>{
    let usuarios = req.body;
        usuarios = async(usuario) =>{
            nuevoUsuario = await this.usuarios;
                if(nuevoUsuario.length === 0){
                    usuario.id = 1
                }else{
                    usuario.id = [nuevoUsuario.length -1].id+1;
                }
                nuevoUsuario.push(usuario)
        }
        res.send({status: "sucess", message: "Usuario creado exitosamente"})

    let cart = req.body;
    if( carts.length === 0){
        return res.status(400).send({status:"error", error: "Debe cargar productos al carrito"})
    }
    carts.push(cart);
    res.send({status: "sucess", message: "Se agrego al carrito"})
        
})


export default router