/*
//buscar el curso
const cursos = [
        {nombre: `Forex`, precio: 200},
        {nombre: `Binarias`, precio: 200},
        {nombre: `Criptomonedas`, precio: 210},
        {nombre: `Acciones`, precio: 180}    
];

let search = prompt("¿Que paquete estas buscando?");
let buscar = cursos.find(el => el.nombre == search);
console.log(buscar);

//elegir las cuotas
cantidadDeCuotas();

function cantidadDeCuotas() {

    let elegirCuotas = prompt("¿En cuantas cuotas realizara el pago?\n"+
"1- 3 cuotas\n"+
"2- 6 cuotas\n"+
"3- 12 cuotas\n"+
"4- 18 cuotas\n"+
"escriba ESC para terminar su consulta\n");

while(elegirCuotas !== "ESC" && elegirCuotas !== "esc"){
    switch(elegirCuotas){
        case "1":
                alert("elegiste 3 cuotas")
                alert("El valor de cada cuota es de USD");
                break;
        case "2":
                alert("elegiste 6 cuotas")
                alert("El valor de cada cuota es de USD");
                break;
        case "3":
                alert("elegiste 12 cuotas")
                alert("El valor de cada cuota es de USD");
                break;
        case "4":
                alert("elegiste 18 cuotas")
                alert("El valor de cada cuota es de USD");
                break;
        default:
            alert("Cantidad de cuotas incorrecto");
            break;
    }
    elegirCuotas = prompt("ingrese otra consulta\n"+
    "1- 3 cuotas\n"+
    "2- 6 cuotas\n"+
    "3- 12 cuotas\n"+
    "4- 18 cuotas\n"+
    "escriba ESC para terminar su consulta\n");
}
}



//carrito
const ListaCursos = [
        {nombre: `Forex`, precio: 200},
        {nombre: `Binarias`, precio: 200},
        {nombre: `Criptomonedas`, precio: 210},
        {nombre: `Acciones`, precio: 180}
];
let carrito = [];

function agregar (precio){
        carrito.push(precio);
        console.log(carrito);
}

agregar();


const totalCarrito = ListaCursos.reduce((acumulador, producto) => acumulador + producto.precio , 0);
console.log(`El total a pagar es ${totalCarrito}`);
*/

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
const contenedorProductos = document.querySelector(".grilla")

const contenedorCarrito = document.querySelector(".carrito-contenedor")

//funciones
stockProductos.forEach((producto)=>{
        const div = document.createElement("div")
        div.classList.add("producto")
        div.innerHTML = ` 
        <img class= "imageCard" src=${producto.img} alt="">
        <p class= "precioProducto">$${producto.precio}</p>
        <button id= "agregar${producto.id}" class= "boton-agregar">COMPRAR <i class="fas fa-shopping-cart"></i></button>
        `
        contenedorProductos.appendChild(div)

        const boton = document.getElementById(`agregar${producto.id}`)

        boton.addEventListener("click", () =>{
                agregarCarrito(producto.id)
        })
})

const agregarCarrito = (prodId) => {
        const item = stockProductos.find ((prod) => prod.id === prodId);
        carrito.push(item);
        actualizarCarrito();
        console.log(carrito);
}

const eliminarDelCarrito = (prodId) => {
        const item = carrito.find((prod) => prod.id === prodId)
        const indice = carrito.indexOf(item)
        carrito.splice(indice, 1)
        actualizarCarrito();
}

const actualizarCarrito = () => {
        contenedorCarrito.innerHTML = ""


        carrito.forEach((prod) => {
                const div = document.createElement("div")
                div.classList.add("productoEnCarrito")
                div.innerHTML = `
                <p>Nombre: ${prod.nombre}</p>
                <p>Precio: ${prod.precio}</p>
                <p>Cantidad: <span id= "cantidad">${prod.cantidad}</span></p>
                <button onclick = "eliminarDelCarrito(${prod.id})" class= "boton-eliminar"><i class= "fas fa-trash-alt"></i></button>
                `
                contenedorCarrito.appendChild(div)
})
}



