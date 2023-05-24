class ProductManager{
    constructor(){
        this.products = []
    }

    getProducts = () =>{
        return this.products
    }

    addProduct=(title, description, precio, thumbnail, code, stock=25)=>{
        const producto = {
            title,
            description,
            precio, 
            thumbnail,
            code,
            stock
        }
        if(this.products.length===0){
            producto.id = 1;
        }else{
            producto.id = this.products[this.products.length -1].id+1
        }
            this.products.push(producto)
           
    }
    getProductById=(idProducto)=>{
        const productoID = this.products.findIndex(e=>e.id === idProducto);
        if(productoID === -1){
            console.log("El producto no pudo ser encontrado");
        }else{
            console.log("Se encontró el producto");
        }
        this.products[productoID].push(idProducto);
    }

}

const Producto1 = new ProductManager();
console.log(Producto1.addProduct("NuevoProducto", "Este es un producto de prueba", 3000, "Sin imagen", "123abc", 23));

const Producto2 = new ProductManager();
console.log(Producto2.addProduct("NuevoProducto2", "Este es un producto de prueba 2", 5000, "Sin imagen", "123def", 23));
