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


//formulario
let nombreForm = document.getElementById("nombre").value;
let apellidoForm = document.getElementById("apellido").value;
let emailForm = document.getElementById("email").value;
let consultaForm = document.getElementById("disabledSelect").value;
let otraConsultaForm = document.getElementById("floatingTextarea").value;


const formulario = document.querySelector("form");
formulario.addEventListener("submit", (e)=> {
        e.preventDefault();
        console.log("Fomulario Enviado")
});

const text = document.querySelector("textarea");

text.addEventListener("change", ()=>{
        console.log(`La consulta fue: ${text.value}`);
})

