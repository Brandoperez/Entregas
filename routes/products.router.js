import { Router } from "express";
import fs from 'fs';
const archivo = '../archivoProductos/productos.json';

const router = Router();

const products = [];

router.get('/products', (req, res) =>{
    const products = async() =>{
        if(fs.existsSync(archivo)){
            const datos = await fs.promises.readFile(archivo, 'utf-8')
            console.log(datos)
            const productos = JSON.parse(datos);
            return productos
        }else{
            return [];
        }
    } 
    res.send({products});
})

router.get('/products/:idProducto', (req, res) =>{
    let idCapturado = req.params.idProducto;

        let productoFiltrado = products.find(p => p.id === idCapturado)
            if(!productoFiltrado) return res.send({error: "Producto no encontrado"})
            res.send({productoFiltrado});
})
router.post('/products', (req, res) =>{
    let productos = req.body;
        productos = async(producto) =>{
            nuevoProducto = await this.productos;
                if(nuevoProducto.length === 0){
                    producto.id = 1
                }else{
                    producto.id = [nuevoProducto.length -1].id+1;
                }
                nuevoProducto.push(producto)
                await fs.promises.writeFile(archivo, JSON.stringify(nuevoProducto, null, '\t'))
        }
        res.send({status: "sucess", message: "Usuario creado exitosamente"})
        
})
router.put('/products/:title', (req, res) =>{
    let productos = req.body;
    let title = req.params.name;

        products = products.filter(productos => productos.title);
        console.log(productos.title)
            if(productos.title == title){
                return res.status(400).send({status: "error", error: "La información que desea actualizar es la misma"})
            }
                products.push(productos)
                res.send({status: "success", message: "Usuario actualizado"})
})

router.delete('/products/:idProducto', (req,res) =>{
     let idProducto = req.params.idProducto;
     
        products = products.filter(productos => productos.id = idProducto)
        if(products.id === idProducto){
            return res.status(400).send({status: "error", error: "Producto no encontrado"})
        }

        res.send({status: "sucess", message: "El producto fué borrado"})
})

export default router