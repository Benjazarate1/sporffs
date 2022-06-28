

let edad = parseInt(prompt("Ingrese su edad"));


if((edad >= 0) && (edad <= 17)){
    console.log("Eres un niño");
} else if ((edad >= 18) && (edad <= 40)){
    console.log("Eres un joven");
} else if(edad > 40){
    console.log("Trajiste tu baston?");
} else {
    console.log("Esa no es una edad valida")
}


