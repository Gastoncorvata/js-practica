//Selectors
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const listaProductos = document.querySelector("#lista-productos");
const vaciarCarrito = document.querySelector("#vaciar-carrito");

let articulosCarrito = [];


/* Listeners */
listaProductos.addEventListener("click", agregarProducto);

carrito.addEventListener("click", quitarProducto);

vaciarCarrito.addEventListener("click", borrarCarrito);

document.addEventListener("DOMContentLoaded", () => {
	articulosCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
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

function borrarCarrito() {
	limpiarCarrito();
	articulosCarrito = [];
	guardarStorage();
}


function quitarProducto(e) {
    e.preventDefault();

	if (e.target.classList.contains(`borrar-producto`)) {
        const productoId = e.target.getAttribute("data-id");
		articulosCarrito = articulosCarrito.filter((producto) => producto.id != productoId);
		insertarCarritoHTML();
		guardarStorage();
	}
}


function obtenerDatos(producto) {
	const productoAgregado = {
		nombre: producto.querySelector("h4").textContent,
		precio: producto.querySelector(".precio span").textContent,
		id: producto.querySelector("a").getAttribute("data-id"),
		cantidad: 1,
    };
    
    const existe = articulosCarrito.some((producto) => producto.id == productoAgregado.id);

	if (existe) {
		/* Producto ya existente */
		const productos = articulosCarrito.map((producto) => {
			if (producto.id === productoAgregado.id) {
				producto.cantidad++;
				return producto;
			} else {
				return producto;
			}
		});
		articulosCarrito = [...productos];
	} else {
		/* Agrego el producto al carrito */
		articulosCarrito.push(productoAgregado);
	}
	insertarCarritoHTML();
	guardarStorage();
}


function guardarStorage() {
	localStorage.setItem("carrito", JSON.stringify(articulosCarrito));
}

function insertarCarritoHTML() {
	/* Borrar contenido carrito */
	limpiarCarrito();

	/* Inserto los productos del carrito en el HTML */
	articulosCarrito.forEach((producto) => {
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
				<a href="#" class="" > <i class="far fa-trash-alt borrar-producto rojo" data-id="${id}"></i> </a>
			</td>
		`;

		contenedorCarrito.appendChild(row);
	});
}

function limpiarCarrito() {
	// contenedorCarrito.innerHTML = '';

	while (contenedorCarrito.firstChild) {
		contenedorCarrito.removeChild(contenedorCarrito.firstChild);
	}
}