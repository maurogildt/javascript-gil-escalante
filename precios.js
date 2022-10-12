function precioMenor(precio,edadMenor){
    if (edadMenor<=2){
        //menor abona el 10%
        return precio*0.10;
    }else if (edadMenor<=12){
        //menor abona el 50%
        return precio/2;
    }else{
        //menor abona como adulto
        return precio;
    }
}
let precio =parseFloat(prompt("Ingrese el precio del paquete"));
let precioTotal=0;
let adultos =parseInt(prompt("Ingrese la cantidad de adultos"));
let menores =parseInt(prompt("Ingrese la cantidad de menores (Ingrese '(0) cero' si no viajan menores)"));
let edadMenor;
if(menores){
    for (let i=1;i<=menores;i++){
        edadMenor =parseInt(prompt("Ingrese la edad del menor "+i));
        precioTotal+=precioMenor(precio,edadMenor);
    }
}
precioTotal +=precio*adultos;
console.log("El precio total es de $"+precioTotal+" para "+adultos+" adultos y "+menores+" menores.\n\n");

for (let i=1;i<=12;i++){
    let precioCuota=0;
    switch (i){
        case 1:
            console.log("Precio en "+i+" pago es de $"+precioTotal+"\n\n");
            break;
        case 2:
        case 3:
            precioCuota = precioTotal + (precioTotal*0,03);
            console.log("Precio en "+i+" pagos es de $"+precioCuota);
            console.log("Cuotas de $"+(precioCuota/i).toFixed(2)+". Interes (3%)\n\n");
            break;
        case 4:
        case 5:
        case 6:
            precioCuota = precioTotal + (precioTotal*0,05);
            console.log("Precio en "+i+" pagos es de $"+precioCuota);
            console.log("Cuotas de $"+(precioCuota/i).toFixed(2)+". Interes (5%)\n\n");
            break;
        case 7:
        case 8:
        case 9:
            precioCuota = precioTotal + (precioTotal*0,10);
            console.log("Precio en "+i+" pagos es de $"+precioCuota);
            console.log("Cuotas de $"+(precioCuota/i).toFixed(2)+". Interes (10%)\n\n");
            break;
        case 10:
        case 11:
        case 12:
            precioCuota = precioTotal + (precioTotal*0,15);
            console.log("Precio en "+i+" pagos es de $"+precioCuota);
            console.log("Cuotas de $"+(precioCuota/i).toFixed(2)+". Interes (15%)\n\n");
            break;
    }
}