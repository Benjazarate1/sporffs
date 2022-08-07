
//stock
let stockProductos = [
        {id: 1, nombre: "UnMes", precio: 200, cantidad: 1, img:'../img/MES1.png'},
        {id: 2, nombre: "DosMeses", precio: 260, cantidad: 1, img: '../img/twomonths.png'},
        {id: 3, nombre: "TresMeses", precio: 320, cantidad: 1, img: '../img/three.png'},
        {id: 4, nombre: "SeisMeses", precio: 400, cantidad: 1, img: '../img/six.png'},
        {id: 5, nombre: "NueveMeses", precio: 480, cantidad: 1, img: '../img/nine.png'},
        {id: 6, nombre: "DoceMeses", precio: 560, cantidad: 1, img: '../img/twuelvemonths.png'},
];

let carrito = [];

//variables
const contenedorProductos = document.querySelector(".grilla");

const contenedorCarrito = document.querySelector("#carrito-contenedor");

const abrirCarrito = document.querySelector("#boton-carrito");

const cerrarCarrito = document.querySelector("#carrito-cerrar");

const botonVaciar = document.querySelector("#vaciarCarrito");

const contadorCarrito = document.querySelector("#contadorCarrito");

const precioTotal = document.querySelector("#precioTotal");

const comprarProducto = document.querySelector("#comprarProducto");

//funciones

//localstore



document.addEventListener("DOMContentLoaded", () => {
        if(localStorage.getItem("carrito")){
                carrito = JSON.parse(localStorage.getItem("carrito"))
                actualizarCarrito()
        }
})

//abrir panel del carrito
abrirCarrito.addEventListener("click", abrirBarra)
function abrirBarra() {
        let columna = document.querySelector("#barra-carrito")
        columna.setAttribute("class","col-5")
}

//cerrar panel del carrito
cerrarCarrito.addEventListener("click", cerrarBarra)
function cerrarBarra () {
        let columna2 = document.querySelector("#barra-carrito")
        columna2.setAttribute("class", "col-5 d-none")
}

//vaciar el carrito
botonVaciar.addEventListener("click", () => {
        carrito.length = 0
        actualizarCarrito()
})

//crear los productos y actualizar 
stockProductos.forEach((producto)=>{
        const div = document.createElement("div")
        div.classList.add("producto")
        div.innerHTML = ` 
        <img class= "imageCard" src=${producto.img} alt="">
        <p class= "precioProducto">$${producto.precio}</p>
        <button id= "agregar${producto.id}" class= "boton-comprar">COMPRAR <i class="fas fa-shopping-cart"></i></button>
        `
        contenedorProductos.appendChild(div)

        const boton = document.getElementById(`agregar${producto.id}`)

        boton.addEventListener("click", () =>{
                agregarCarrito(producto.id)
        })
})

//agregar prod al carrito
const agregarCarrito = (prodId) => {
        const existe = carrito.some (prod => prod.id === prodId)
        if (existe){
                const prod = carrito.map (prod => {
                        if (prod.id === prodId){
                                prod.cantidad++
                        }
                })
        } else {

        const item = stockProductos.find ((prod) => prod.id === prodId);
        carrito.push(item);     
}
actualizarCarrito();
}


//eliminar prod del carrito
const eliminarDelCarrito = (prodId) => {
        const item = carrito.find((prod) => prod.id === prodId)
        const indice = carrito.indexOf(item)
        carrito.splice(indice, 1)
        actualizarCarrito();
}

//actualizar carrito
const actualizarCarrito = () => {
        contenedorCarrito.innerHTML = ""


        carrito.forEach((prod) => {
                const div = document.createElement("div")
                div.classList.add("productoEnCarrito")
                div.innerHTML = `
                <p>Nombre: ${prod.nombre}</p>
                <p>Precio: ${prod.precio}</p>
                <img class= "cart-image" src="${prod.img}" />
                <p>Cantidad: <span id= "cantidad">${prod.cantidad}</span></p>
                <button onclick = "eliminarDelCarrito(${prod.id})" class= "boton-eliminar"><i class= "fas fa-trash-alt fa-2x"></i></button>
                `
                contenedorCarrito.appendChild(div)

                localStorage.setItem("carrito", JSON.stringify(carrito))
                
        })

        contadorCarrito.innerText = carrito.length
        precioTotal.innerText = carrito.reduce((acu, prod) => acu + prod.precio*prod.cantidad, 0)
}


comprarProducto.addEventListener("click", ()=>{
        Swal.fire(
                'Felicitaciones!',
                'Compra realizada con éxito!',
                'success'
              )
        
})



