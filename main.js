cantidadDeCuotas()

function cantidadDeCuotas() {

    let elegirCuotas = prompt("¿En cuantas cuotas realizara el pago?\n"+
"1- 3 cuotas\n"+
"2- 6 cuotas\n"+
"3- 12 cuotas\n"+
"4- 18 cuotas\n"+
"escriba ESC para terminar su consulta\n");

while(elegirCuotas !== "ESC" && elegirCuotas !== "esc"){
    switch(elegirCuotas.toUpperCase()){
        case "1":
                alert("elegiste 3 cuotas")
                alert("El valor de cada cuota es de 58USD");
                break;
        case "2":
                alert("elegiste 6 cuotas")
                alert("El valor de cada cuota es de 63USD");
                break;
        case "3":
                alert("elegiste 12 cuotas")
                alert("El valor de cada cuota es de 68USD");
                break;
        case "4":
                alert("elegiste 18 cuotas")
                alert("El valor de cada cuota es de 73USD");
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

