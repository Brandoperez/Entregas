import fs from "fs";

const path = '../archivoProductos/productos.json';

export default class ProductManager{
    constructor(){
        this.products = []
    }

    getProducts = async () =>{
        if(fs.existsSync(path)){
            const datosProductos = await fs.promises.readFile(path, "utf-8")
            console.log(datosProductos);
            const productos = JSON.parse(datosProductos)
            return productos
        }else{
            return[]
        }
    } 



   /* addProduct= async (producto)=>{
        const producto = await this.getProducts();
            if(producto.length === 0){
                producto.id = 1
            }else{
                producto.id = producto[producto.length-1].id+1;
            }

                producto.push(producto)
                await fs.promises.writeFile(this.path, JSON.stringify(productos, null, '/T'))
                return producto

       

        
    }*/
    getProductById=()=>{
        if (!this.products.find((producto) => producto.id === id)){
            console.log("El producto no pudo ser encontrado");
        }else{
            console.log(this.products.find((producto) => producto.id === id)) 
        }
    }

}