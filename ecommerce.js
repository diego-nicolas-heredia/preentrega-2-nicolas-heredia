const productos = [
    { nombre: `gorra`, precio: 3700 },
    { nombre: `camisa`, precio: 15000 },
    { nombre: `remera`, precio: 9500 },
    { nombre: `campera`, precio: 35000 },
    { nombre: `buzo`, precio: 10000 },
    { nombre: `medias` , precio: 3500 },
    { nombre: `zapatilla` , precio: 45000 },
];

let carrito = []

let seleccion = prompt(`hola desea compran algun producto si o no`)

while (seleccion != `si` && seleccion != `no`) {
    alert(`por favor ingresa si o no`)
    seleccion = prompt(`hola desea compran algun producto si o no`)
}

if(seleccion ==`si`){
    alert(`a continuacion nuestra lista de productos`)
    let todoslosproductos = productos.map((producto) => producto.nombre + `` + producto.precio + `$`);
    alert(todoslosproductos.join(` - `))
} else if(seleccion == `no`){
    alert(`gracias por su visita, hasta pronto!!!`)
}

while(seleccion != `no`){
    let producto = prompt(`agrega un producto a tu carrito`)
    let precio = 0 

    if(producto == `gorra` || producto == `camisa` || producto == `remera` || producto == `campera` || producto == `buzo` || producto == `medias` || producto == `zapatillas` ){
        switch(producto) {
            case "gorra":
            precio = 3700
            break;
            case "camisa":
            precio = 15000
            break;
            case "remera":
            precio = 9500
            break;
            case "campera":
            precio = 35000
            break;
            case "buzo":
            precio = 10000
            break;
            case "medias":
            precio = 3500
            break;
            case "zapatillas":
            precio = 45000
            default:
                break;
            }
            let unidades = parseInt(prompt(`cuantas unidades quiere llevar?`))

            carrito.push({producto, unidades, precio})
            console.log(carrito)
    } else{
        alert(`no tenemos ese producto`)
    }
seleccion = prompt(`desea agregar algo mas?`)

while(seleccion === `no`){
    alert(`gracias por la compra! hasta pronto`)
    carrito.forEach((carritoFinal) => {
        console.log( `producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
        total a pagar por unidades ${carritoFinal.unidades * carritoFinal.precio} ` )
    } )
    break;
}
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0) 
console.log(`el total a pagar por su compra es: ${total}`)


