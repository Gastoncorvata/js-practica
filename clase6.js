const carrito = [];

class Prodcuto {
	constructor(combo, tamanio, precio) {
		this.combo = combo;
        this.tamanio = tamanio;
        this.precio = precio;
	}
}

const promo1 = new Prodcuto("springfield grande", "wisconsin grande", 800);
const promo2 = new Prodcuto("chicago mediano", "wisconsin mediano", 900);
const promo3 = new Prodcuto("springfiel chico", "chicago chico", 950);


const comboUsuario = prompt("Ingresa el combo que te gusta");
const tamanioUsuario = prompt("Ingresa el tamanio del combo");
const precioCombo = ((promo3.precio) - (promo3.precio * 0.2));

const promoUsuario = new Prodcuto(comboUsuario, tamanioUsuario, precioCombo);

carrito.push(promo1);
carrito.push(promo2);
carrito.push(promo3);
carrito.push(promoUsuario);

console.log(promoUsuario);
console.log(carrito);
console.table(carrito);

alert(`Su combo ${comboUsuario} tamanio ${tamanioUsuario} tiene un 20% de descuento.`);
alert(`El total a pagar es de $${precioCombo} en total, con el descuento del 20%.`);

