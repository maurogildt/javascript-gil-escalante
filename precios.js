function precioMenor(precio,edad){
    if (edad<=2){
        //menor de 2 abona el 10%
        return precio*0.10;
    }else if (edad<=12){
        //menor de 12 abona el 50%
        return precio/2;
    }else{
        return precio;
    }
}
class pasajeros {
    constructor (nombre, edad){
        this.nombre =nombre;
        this.edad =edad;
    }
}

let precio =parseFloat(prompt("Ingrese el precio del paquete"));
let precioTotal=0;
let precioCuota=0;
let cantPasajeros =parseInt(prompt("Ingrese la cantidad de pasajeros"));
let listaPasajeros = [];
for (let i=1;i<=cantPasajeros;i++){
    let nombre = prompt("Ingrese el nombre del pasajero "+i);
    let edad = parseInt(prompt("Ingrese la edad del pasajero "+i));
    const pasajero = new pasajeros (nombre,edad);
    listaPasajeros.push(pasajero)
    precioTotal += precioMenor(precio,edad);
}
let cantCuotas =parseInt(prompt("En cuantas cuotas quiere abonar? (Entre 1-12 cuotas)"));

for (const pasajero in listaPasajeros ){
    if (listaPasajeros[pasajero].edad<=2){
        console.log("El pasajero "+listaPasajeros[pasajero].nombre+" es menor de 2 abona el 10% $"+precio*0.10);
    }else if (listaPasajeros[pasajero].edad<=12){
        console.log("El pasajero "+listaPasajeros[pasajero].nombre+" es menor de 12 abona el 50% $"+precio/2);
    }else{
        console.log("El pasajero "+listaPasajeros[pasajero].nombre+" abona $"+precio);
    }
}
console.log("El precio total es de $"+precioTotal+"\n\n");

switch (cantCuotas){
    case 1:
        console.log("Precio en "+cantCuotas+" pago $"+precioTotal+"\n\n");
        break;
    case 2:
    case 3:
        precioCuota = precioTotal + (precioTotal*0,03);
        console.log("Precio en "+cantCuotas+" pagos $"+precioCuota);
        console.log("Cuotas de $"+(precioCuota/cantCuotas).toFixed(2)+". Interes (3%)\n\n");
        break;
    case 4:
    case 5:
    case 6:
        precioCuota = precioTotal + (precioTotal*0,05);
        console.log("Precio en "+cantCuotas+" pagos $"+precioCuota);
        console.log("Cuotas de $"+(precioCuota/cantCuotas).toFixed(2)+". Interes (5%)\n\n");
        break;
    case 7:
    case 8:
    case 9:
        precioCuota = precioTotal + (precioTotal*0,10);
        console.log("Precio en "+cantCuotas+" pagos $"+precioCuota);
        console.log("Cuotas de $"+(precioCuota/cantCuotas).toFixed(2)+". Interes (10%)\n\n");
        break;
    case 10:
    case 11:
    case 12:
        precioCuota = precioTotal + (precioTotal*0,15);
        console.log("Precio en "+cantCuotas+" pagos $"+precioCuota);
        console.log("Cuotas de $"+(precioCuota/cantCuotas).toFixed(2)+". Interes (15%)\n\n");
        break;
}