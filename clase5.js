// Funcion para crear objetos//
class Producto {
    constructor(nombre, medallon, pan, ingredientes, snack, precio, tiempo) {
        this.nombre = nombre;
        this.medallon = medallon;
        this.pan = pan;
        this.ingredientes = ingredientes;
        this.snack = snack;
        this.precio = precio;
        this.tiempo = tiempo;
        this.getName = function () {
			return this.nombre;
		};
		this.getTime = function () {
			return this.tiempo;
		}
    };
}

const producto1 = new Producto(
	"springfield bacon",
	"blend res",
	"cloudy blanco",
	"bacon & cheddar + swiss",
	"papas baston xl",
	450,
	17,
);

console.log(producto1);


const producto2 = new Producto(
	"wisconsin butter",
	"blend res & pork",
	"cloudy negro & semillas",
	"lechuga + cheddar + swiss",
	"chesse baston medium",
	430,
	15,
);
console.log(producto2);

const producto3 = new Producto(
	"chicago onions",
	"grill pork or chicken",
	"cloudy blanco & semillas",
	"caramel onions + swiss chesse",
	"aros onions small",
	375,
	12,
);
console.log(producto3);

//objetos menu combos presentacion de combos //
const combo = {
	menu1: producto1.getName(),
	menu2: producto2.getName(),
	menu3: producto3.getName(),

	mostrarCombo: function () {
		alert(`Combinando un  ${this.menu1} con un  ${this.menu2} tenes un 20% de descuento.`);
		alert(`LLevando el  ${this.menu2} junto al  ${this.menu3} agrandas tus bebidas GRATIS!`);
		alert(`Si llevas un ${this.menu3} con un ${this.menu1} te regalamos unos bastones de quesso.`);
	},
};
combo.mostrarCombo();

//interaccion con cliente + recepcion de pedido//
let cliente = prompt("Elija su combo, 1, 2 o 3");

if (cliente == 1){
	alert(`El combo ${producto1.getName()} estara listo en ${producto1.getTime()} minutos.`);
	console.log(`El combo ${producto1.getName()} estara listo en ${producto1.getTime()} minutos.`);
}else if(cliente == 2){
	alert(`El combo ${producto2.getName()} estara listo en ${producto2.getTime()} minutos.`);
	console.log(`El combo ${producto2.getName()} estara listo en ${producto2.getTime()} minutos.`);
}else{
	alert(`El combo ${producto3.getName()} estara listo en ${producto3.getTime()} minutos.`);
	console.log(`El combo ${producto3.getName()} estara listo en ${producto3.getTime()} minutos.`);
};