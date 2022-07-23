const cursos = [
        {nombre: `Forex`, precio: 200},
        {nombre: `Binarias`, precio: 200},
        {nombre: `Criptomonedas`, precio: 210},
        {nombre: `Acciones`, precio: 180}    
];

let search = prompt("¿Que paquete estas buscando?");
let buscar = cursos.find(el => el.nombre == search);
console.log(buscar);

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

let listaPaquetes = ["Forex", "Binarias", "Criptomonedas", "Acciones"];
console.log(`Nuestros paquetes son ${listaPaquetes}`);

let nuevoPaquete = prompt("¿Que paquete te gustaria que SporffsAcademy tuviera?\n" + "Por favor escribir el paquete con la inicial en mayuscula");
listaPaquetes.push(nuevoPaquete);

let eliminarPaquete = prompt("¿Que paquete crees que SporfssAcademy deberia dejar de enseñar?\n" + "Por favor escribir el paquete con la inicial en mayuscula");
listaPaquetes.splice(listaPaquetes.indexOf(eliminarPaquete),1);


console.log(listaPaquetes.join("-"));

const ListaCursos = [
        {nombre: `Forex`, precio: 200},
        {nombre: `Binarias`, precio: 200},
        {nombre: `Criptomonedas`, precio: 210},
        {nombre: `Acciones`, precio: 180}
];
let carrito = [];

function agregar (precio){
        carrito.push(precio);
}

agregar();


const totalCarrito = ListaCursos.reduce((acumulador, producto) => acumulador + producto.precio , 0);
console.log(`El total a pagar es ${totalCarrito}`);



