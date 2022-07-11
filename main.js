let elegirCuotas = parseInt(prompt("¿En cuantas cuotas realizara el pago?"));

while(elegirCuotas != "ESC"){
    switch(elegirCuotas){
        case 3:
            if(elegirCuotas ==3){
                alert("El valor de cada cuota es de 58USD");
                break;
            }
        case 6:
            if(elegirCuotas ==6){
                alert("El valor de cada cuota es de 63USD");
                break;
            }
            
        case 12:
            if(elegirCuotas ==12){
                alert("El valor de cada cuota es de 68USD");
                break;
            }
            
        case 18:
            if(elegirCuotas ==18){
                alert("El valor de cada cuota es de 73USD");
                break;
            }
            
        default:
            alert("Cantidad de cuotas incorrecto");
            break;
    }
}
