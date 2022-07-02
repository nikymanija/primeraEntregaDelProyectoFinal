
let nombreProductoPromp = String(prompt("Agregue el nombre de un producto"));
let precioDelProductoPromp = parseFloat(prompt("Ingrese el precio de venta "));

let nombreProductoPromp2 = String(prompt("Agregue el nombre de un segundo producto"));
let precioDelProductoPromp2 = parseFloat(prompt("Ingrese el precio de venta "));







class Products {
    constructor() {
        
        this.productos=[]

    
    }




    agregarProductos(nombreDeProducto,precioProducto){
        return this.productos.push({nombreDeProducto,precioProducto});
    }

    cantidadDeProductos(){
        return this.productos.length;
    }

    todosLosProductos(){
        return this.productos;
    }



}

const nuevoProducto = new Products(
   
   
    
);




console.log(nuevoProducto.todosLosProductos())

if ( isNaN(nombreProductoPromp) &  !(isNaN(precioDelProductoPromp))){
    console.log("El primer producto se agrego al array")
    console.log(nuevoProducto.agregarProductos(nombreProductoPromp,precioDelProductoPromp)); 
}else(alert("El producto no se agrego porque el nombre del producto no puede ser un numero o porque el precio del producto debe ser numérico "))


if ( isNaN(nombreProductoPromp2) &  !(isNaN(precioDelProductoPromp2))){
    console.log("El segundo producto se agrego al array")
    console.log(nuevoProducto.agregarProductos(nombreProductoPromp2,precioDelProductoPromp2)); 
}else(alert("El producto no se agrego porque el nombre del producto no puede ser un numero o porque el precio del producto debe ser numérico "))





alert(`La cantidad de productos en al array es de : ${nuevoProducto.cantidadDeProductos()} productos`);








let nameProdPromt = String(prompt (`Escriba alguno de los siguientes productos disponibles: ${nombreProductoPromp} , ${nombreProductoPromp2}`));







let nameProd = nuevoProducto.todosLosProductos()


const buscarProdNam = nameProd.filter(p=> p.nombreDeProducto==nameProdPromt);

if(buscarProdNam.length !=0){
    alert(" El producto existe")
}else{
    alert("No existe el producto")
}


console.log(buscarProdNam);


