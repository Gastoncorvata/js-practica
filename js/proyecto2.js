//Selectors
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const listaProductos = document.querySelector("#lista-productos");

let articulosCarrito = [];

/* Listeners */
listaProductos.addEventListener("click", agregarProducto);
document.addEventListener("DOMContentLoaded", () => {
	articulosCarrito = JSON.parse(localStorage.getItem("carrito"));
	insertarCarritoHTML();
});


//Funtions
function agregarProducto(e) {
	e.preventDefault();
	if (e.target.classList.contains("agregar-carrito")) {
		const productoSeleccionado = e.target.parentElement.parentElement;
		obtenerDatos(productoSeleccionado);
	}
}

function obtenerDatos(producto) {
	const productoAgregado = {
		nombre: producto.querySelector('h4').textContent,
		precio: producto.querySelector('.precio span').textContent,
		id: producto.querySelector('a').getAttribute('data-id'),
		cantidad: 1
    }
}

const existe = articulosCarrito.some((producto) => producto.id == productoAgregado.id);

function insertarCarritoHTML() {
	/* Borrar contenido carrito */
	limpiarCarrito();

	/* Inserto los productos del carrito en el HTML */
	articulosCarrito.forEach(producto => {
		/* Destructuring sobre el producto */
		const { nombre, precio, cantidad, id } = producto;

		const row = document.createElement("tr");
		row.innerHTML = `
			<td>
				${nombre}
			</td>
			<td>
				${precio}
			</td>
			<td>
				${cantidad}
			</td>
			<td>
				<a href="#" class="borrar-producto" data-id="${id}"> X </a>
			</td>
		`;

		contenedorCarrito.appendChild(row);
	});
}