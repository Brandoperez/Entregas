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
            this.products.push({
                ...producto,
                id:this.products[this.products.length -1]+1
            });
        

        for(let i = 0; i < producto.length; i++){
                console.log(producto[i]);
        }
    }
    getProductById=()=>{
        if (!this.products.find((producto) => producto.id === id)){
            console.log("El producto no pudo ser encontrado");
        }else{
            console.log(this.products.find((producto) => producto.id === id)) 
        }
    }

}



creadorProductos = new ProductManager();

creadorProductos.addProduct("NuevoProducto1", "Este es un producto de prueba 2", 5000, "Sin imagen", "123def", 7);


