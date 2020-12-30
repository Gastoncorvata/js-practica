const carrito = [];

class Prodcuto {
	constructor(combo, tamanio, precio) {
		this.combo = combo;
		this.tamanio = tamanio;
		this.precio = precio;
	}
}

const promo3 = new Prodcuto("springfiel chico", "chicago chico", 950);

const comboUsuario = listaPedido.innerHTML = prompt("Ingresa el combo que te gusta");
const tamanioUsuario = prompt("Ingresa el tamanio del combo");
const precioCombo = promo3.precio - promo3.precio * 0.2;

const promoUsuario = new Prodcuto(comboUsuario, tamanioUsuario, precioCombo);

carrito.push(promoUsuario);

console.log(promoUsuario);
console.log(carrito);