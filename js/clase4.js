let precioEfectivo = Number(prompt("Ingresa el precio en Efectivo del producto"));
let precioCuotas = Number(prompt("Ingresa el precio en Cuotas del producto"));
let cantidadCuotas = Number(prompt("Ingresa la cantidad de Cuotas que financias"));
let inflacion = 3.8

function calculos(){
    calculo1 = precioCuotas / cantidadCuotas;
    console.log("En cuotas pagas por mes " + calculo1);
    calculo2 = (precioEfectivo / cantidadCuotas) * inflacion;
    console.log("La inflacion no llega a compensar el interes de las cuotas ");
    if (calculo1 > calculo2){
        alert("Te conviene comprar en Efectivo");
        console.log("Te conviene comprar en Efectivo");
    }else{
        alert("Te conviene comprarlo en Cuotas, ganas con la inflacion")
        console.log("Te conviene comprarlo en Cuotas, ganas con la inflacion");
    }
}

calculos();
