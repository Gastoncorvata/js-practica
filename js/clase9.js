const carrito = [];

const boton1 = document.querySelector("#botonProducto1");
const burger = document.querySelector("#burger1");


boton1.onclick = agregarCombo; 

let combo1 = {
    nombre: "Springfield Bacon",
    tamanio: "Grande",
    precio: "$ 450",
}




function agregarCombo() {
    listaPedido.innerHTML = `<li> ${burger.textContent} <a class="btn btn-outline-danger" id="xBoton" onclick="sacarPedido()" href="#comandaPedido">X</a></li>`;
    carrito.push(combo1);
    console.table(carrito);
}

function sacarPedido() {
    listaPedido.innerHTML = "";
}



