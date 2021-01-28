
window.addEventListener("hashchange", router);
document.addEventListener("DOMContentLoaded", router);

/*-------------------------------------Components---------------------------------------*/
const HomeComponent = {
    render: () => {
        return `
        <!--Header-->
    <div class="container text-center py-5">
        <div class="hero">
            <div class="text-center iconoBurger">
                <i class="fas fa-hamburger" aria-hidden="true"></i>
            </div>
            <div class="text-center titulo">
                <p>Sanfran</p>
            </div>
            <div class="text-center subtitulo">
                <p>Smashing Burgers</p>
                <p>Since 2020</p>
            </div>
        </div>
        <p class="text-center blanco">Jueves a Lunes <strong> walk-up 19:30  to   23:30PM <i class="far fa-clock"></i></strong>  </p>
        <p class="text-center blanco">Martes y Miercoles  <strong>CLOSED  <i class="far fa-calendar-times"></i></strong> </p>
    </div>
        `
    }
}

const BurgerComponent = {
	render: () => {
		return `
        <!--Burger-->
    <div class="container my-5 py-5" id="lista-productos">
        <div class="row justify-content-around">
            <div class="card col-12 col-md-3 py-4" style="width: 16rem;">
                <img src="../img/burguer1.png" class="card-img-top" alt="Burger image">
                <div class="card-body">
                <h4 class="card-title text-justify text-center blanco">Springfield Bacon</h4>
                <h6 class="card-subtitle mb-2 text-muted text-center">Calories-980 / Carbs-40 / Sodium-1050</h6>
                <p class="card-text text-justify blanco">
                Our regular two-patty burger, layered with four pieces of crispy, sweet applewood-smoked bacon.</p>
                <p class="precio blanco"> $ <span>570</span></p>
                <a href="#" class="btn-sm btn-outline-light agregar-carrito" data-toggle="tooltip"
        data-placement="top" title="Tapa Arterias" data-id="1">Agregar  <i class="fas fa-shopping-basket"></i>
                </a>
                </div>
            </div>
            <div class="card col-12 col-md-3 py-4" style="width: 16rem;">
                <img src="../img/burger3.png" class="card-img-top" alt="Burger image">
                <div class="card-body">
                <h4 class="card-title text-justify text-center blanco">Wisconsin Butter</h4>
                <h6 class="card-subtitle mb-2 text-muted text-center">Calories-930 / Carbs-38 / Sodium-950</h6>
                <p class="card-text text-justify blanco">
                Wide selection of beef, pork, chicken, seafood, or veggie patties. regular two-patty burger</p>
                <p class="precio blanco"> $ <span>560</span></p>
                <a href="#" class="btn-sm btn-outline-light agregar-carrito" data-toggle="tooltip" data-placement="top" title="Wisconsin" data-id="2">Agregar  <i class="fas fa-shopping-basket"></i>
                </a>
                </div>
            </div>
            <div class="card col-12 col-md-3 py-4" style="width: 16rem;">
                <img src="../img/burger4.png" class="card-img-top" alt="Burger image">
                <div class="card-body">
                <h4 class="card-title text-justify text-center blanco">Chicago Onions</h4>
                <h6 class="card-subtitle mb-2 text-muted text-center">Calories-850 / Carbs-22 / Sodium-760</h6>
                <p class="card-text text-justify blanco">
                Two slices of Kraft American Cheese melted between two freshly grilled patties on a soft, toasted bun.</p>
                <p class="precio blanco"> $ <span>550</span></p>
                <a href="#" class="btn-sm btn-outline-light agregar-carrito" data-toggle="tooltip"
                    data-placement="top" title="Con Cebollas" data-id="3">Agregar  <i class="fas fa-shopping-basket"></i></a>
                
                </div>
            </div>
            <div class="card col-12 col-md-3 py-4" style="width: 16rem;">
                <img src="../img/burger5.png" class="card-img-top" alt="Burger image">
                <div class="card-body">
                <h4 class="card-title text-justify text-center blanco">American Burger</h4>
                <h6 class="card-subtitle mb-2 text-muted text-center">Calories-850 / Carbs-22 / Sodium-760</h6>
                <p class="card-text text-justify blanco">
                Two slices of Kraft American Cheese melted between two freshly grilled patties on a soft, toasted bun.</p>
                <p class="precio blanco"> $ <span>540</span></p>
                <a href="#" class="btn-sm btn-outline-light agregar-carrito" data-toggle="tooltip"
                    data-placement="top" title="Bien Yanki" data-id="4">Agregar  <i class="fas fa-shopping-basket"></i></a>
                
                </div>
            </div>
            <div class="card col-12 col-md-3 py-4" style="width: 16rem;">
                <img src="../img/burguer1.png" class="card-img-top" alt="Burger image">
                <div class="card-body">
                <h4 class="card-title text-justify text-center blanco">Springfield Bacon</h4>
                <h6 class="card-subtitle mb-2 text-muted text-center">Calories-980 / Carbs-40 / Sodium-1050</h6>
                <p class="card-text text-justify blanco">
                Our regular two-patty burger, layered with four pieces of crispy, sweet applewood-smoked bacon.</p>
                <p class="precio blanco"> $ <span>530</span></p>
                <a href="#" class="btn-sm btn-outline-light agregar-carrito" data-toggle="tooltip"
                    data-placement="top" title="Bacon Burger" data-id="5">Agregar  <i class="fas fa-shopping-basket"></i></a>
                
                </div>
            </div>
            <div class="card col-12 col-md-3 py-4" style="width: 16rem;">
                <img src="../img/burger3.png" class="card-img-top" alt="Burger image">
                <div class="card-body">
                <h4 class="card-title text-justify text-center blanco">Wisconsin Butter</h4>
                <h6 class="card-subtitle mb-2 text-muted text-center">Calories-930 / Carbs-38 / Sodium-950</h6>
                <p class="card-text text-justify blanco">
                Wide selection of beef, pork, chicken, seafood, or veggie patties. regular two-patty burger</p>
                <p class="precio blanco"> $ <span>500</span></p>
                <a href="#" class="btn-sm btn-outline-light agregar-carrito" data-toggle="tooltip"
                    data-placement="top" title="Wisconsin"  data-id="6">Agregar  <i class="fas fa-shopping-basket"></i></a>
                
                </div>
            </div>
            <div class="card col-12 col-md-3 py-4" style="width: 16rem;">
                <img src="../img/burger4.png" class="card-img-top" alt="Burger image">
                <div class="card-body">
                <h4 class="card-title text-justify text-center blanco">Springfield Bacon</h4>
                <h6 class="card-subtitle mb-2 text-muted text-center">Calories-980 / Carbs-40 / Sodium-1050</h6>
                <p class="card-text text-justify blanco">
                Our regular two-patty burger, layered with four pieces of crispy, sweet applewood-smoked bacon.</p>
                <p class="precio blanco"> $ <span>490</span></p>
                <a href="#" class="btn-sm btn-outline-light agregar-carrito" data-toggle="tooltip"
                    data-placement="top" title="Bacon Burger" data-id="7">Agregar  <i class="fas fa-shopping-basket"></i></a>
                
                </div>
            </div>
            <div class="card col-12 col-md-3 py-4" style="width: 16rem;">
                <img src="../img/burger5.png" class="card-img-top" alt="Burger image">
                <div class="card-body">
                <h4 class="card-title text-justify text-center blanco">Wisconsin Butter</h4>
                <h6 class="card-subtitle mb-2 text-muted text-center">Calories-930 / Carbs-38 / Sodium-950</h6>
                <p class="card-text text-justify blanco">
                Wide selection of beef, pork, chicken, seafood, or veggie patties. regular two-patty burger</p>
                <p class="precio blanco"> $ <span>480</span></p>
                <a href="#" class="btn-sm btn-outline-light agregar-carrito" data-toggle="tooltip"
                    data-placement="top" title="Wisconsin" data-id="8">Agregar  <i class="fas fa-shopping-basket"></i></a>
                
                </div>
            </div>
        </div>
    </div>`;
	},
};

const PromosComponent = {
	render: () => {
		return `
        <!-- Promociones -->
        <div class="row justify-content-around py-5" id="bebida">
            <div class="card col-12 col-md-4 py-4" style="width: 16rem;">
                <img src="../img/coca.png" class="card-img-top" alt="Coca image">
                <div class="card-body">
                <h4 class="card-title text-justify text-center blanco">Coca-Cola</h4>
                <h6 class="card-subtitle mb-2 text-muted text-center">Zero / Ligth / Regular </h6>
                <p class="card-text text-justify blanco">
                Botella plastico de 1ooo cc. Linea Coca-Cola. Sprite, Fanta, Coca, Cepita.</p>
                <p class="precio blanco"> $ <span>150</span></p>
                <a href="#" class="btn-sm btn-outline-light agregar-carrito" data-toggle="tooltip"
                    data-placement="top" title="Gaseosa" data-id="9">Agregar  <i class="fas fa-shopping-basket"></i></a>
                
                </div>
            </div>
            <div class="card col-12 col-md-4 py-4" style="width: 16rem;">
                <img src="../img/beer.png" class="card-img-top" alt="Birra image">
                <div class="card-body">
                <h4 class="card-title text-justify text-center blanco">Cerveza</h4>
                <h6 class="card-subtitle mb-2 text-muted text-center">Corona / Estrella / Sol </h6>
                <p class="card-text text-justify blanco">
                Botella vidrio o lata de 500 cc. Todos las variantes de Corona, Estrella o Sol.</p>
                <p class="precio blanco"> $ <span>150</span></p>
                <a href="#" class="btn-sm btn-outline-light agregar-carrito" data-toggle="tooltip"
                    data-placement="top" title="Birra" data-id="10">Agregar  <i class="fas fa-shopping-basket"></i></a>
                
                </div>
            </div>
            <div class="card col-12 col-md-4 py-4" style="width: 16rem;" id="postre">
                <img src="../img/franui.png" class="card-img-top" alt="Fra-nui image">
                <div class="card-body">
                <h4 class="card-title text-justify text-center blanco">Fra-nui</h4>
                <h6 class="card-subtitle mb-2 text-muted text-center">Chocolate Amargo / Chocolate con Leche</h6>
                <p class="card-text text-justify blanco">
                Frambuesas bañadas en chocolate de Bariloche.</p>
                <p class="precio blanco"> $ <span>270</span></p>
                <a href="#" class="btn-sm btn-outline-light agregar-carrito" data-toggle="tooltip"
                    data-placement="top" title="Frambuesas" data-id="11">Agregar  <i class="fas fa-shopping-basket"></i></a>
                
                </div>
            </div>
        </div>
        `;
	},
};

const TeamStoreComponent = {
	render: () => {
		return `
        <!--TeamStore-->
        <h2 class="text-center fs-lg-1 fw-bolder fst-italic blanco py-5" id="store">INSID<i class="fab fa-etsy"></i><i class="far fa-registered"></i></h2>
        <div class="row justify-content-around" id="teamStore">
            <div class="card col-6 col-lg-3 " style="width: 15rem;">
                <img src="../img/reme1.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h4 class="card-title blanco">Remera Negra SF</h4>
                    <h6 class="card-subtitle mb-2 text-muted text-center">XS / S / M / L / XL</h6>
                    <p class="card-text blanco">Remera de algodon 100% color negra con logo, todos los talles</p>
                    <p class="precio blanco"> $ <span>850</span></p>
                    <a href="#" class="btn-sm btn-outline-light agregar-carrito" data-toggle="tooltip"
                    data-placement="top" title="Negra SF" data-id="12">Agregar  <i class="fas fa-shopping-basket"></i></a>
                    
                </div>
            </div>
            <div class="card col-6 col-lg-3" style="width: 15rem;">
                <img src="../img/reme2.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h4 class="card-title blanco">Remera verde SF</h4>
                    <h6 class="card-subtitle mb-2 text-muted text-center">XS / S / M / L / XL</h6>
                    <p class="card-text blanco">Remera de algodon 100% color negra con logo, todos los talles</p>
                    <p class="precio blanco"> $ <span>850</span></p>
                    <a href="#" class="btn-sm btn-outline-light agregar-carrito" data-toggle="tooltip"
                        data-placement="top" title="Verde SF" data-id="13">Agregar  <i class="fas fa-shopping-basket"></i></a>
                    
                </div>
            </div>
            <div class="card col-6 col-lg-3" style="width: 15rem;">
                <img src="../img/reme3.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h4 class="card-title blanco">Remera Blanca SF</h4>
                    <h6 class="card-subtitle mb-2 text-muted text-center">XS / S / M / L / XL</h6>
                    <p class="card-text  blanco">Remera de algodon 100% color negra con logo, todos los talles</p>
                    <p class="precio blanco"> $ <span>800</span></p>
                    <a href="#" class="btn-sm btn-outline-light agregar-carrito" data-toggle="tooltip"
                        data-placement="top" title="Blanca SF" data-id="14">Agregar  <i class="fas fa-shopping-basket"></i></a>
                    
                </div>
            </div>
            <div class="card col-6 col-lg-3" style="width: 15rem;">
                <img src="../img/barbi1.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h4 class="card-title blanco">Barbijo Negro SF</h4>
                    <h6 class="card-subtitle mb-2 text-muted text-center"> S / M / L </h6>
                    <p class="card-text blanco">Barbijo de algodon 100% color negra con logo, todos los talles</p>
                    <p class="precio blanco"> $ <span>250</span></p>
                    <a href="#" class="btn-sm btn-outline-light agregar-carrito" data-toggle="tooltip"
                        data-placement="top" title="Barbijo" data-id="15">Agregar  <i class="fas fa-shopping-basket"></i></a>
                    
                </div>
            </div>            
        </div>
    </div>
        `;
	},
};

const StoryComponent = {
	render: () => {
		return `
        <!--Story-->
    <div class="container story text-center blanco m-lg-5 p-lg-5 py-5" id="story" >
        <h1 >Asi empezamos...</h1>
        <p>
            Hace poco iniciamos con esto a raíz de crear una BUENA hamburguesa. ¿Sabíamos que nos iba a ir bien? Suponíamos que si, la seguridad no llega por arte de magia, siempre confiamos en nuestro producto, en nuestras ganas de crecer y en cada detalle que aportaba cada uno de nosotros como equipo de trabajo.
Nosotros les damos nuestra palabra de que tenemos una GRAN hamburguesa. Un excelente pan, buen balance de carne-grasa en nuestro blend y usamos los mejores productos en nuestras burgers

Valoramos la confianza de nuestro público, no hay nada mejor que afianzar una amistad con cada uno de ustedes. Realmente se disfruta. Ustedes ya no son clientes, son amigos de la casa. Amigos de SANFRAN BURGERS. Y vos, desde casa mientras lees esto, sabes que es así.

Aca les habla <strong> @minioclaudio_</strong></p>
        <p class="fs-1">Drop in and join us.  Make an order.</p>
        <p class="fs-3"><strong class="nosotroStory">Welcome Home.</strong> </p>
        <h4 class="fst-italic fw-lighter fs-2"> Unite a nosotros. Hace tu pedido.</h4>
        <p class="fst-italic fw-lighter fs-5 nosotroStory">Bienvenidos a Casa. </p>
    </div>
        `;
	},
};

const CommunityComponent = {
	render: () => {
		return `
        <!--Community-->
    <div class="container m-lg-5 pl-lg-5 py-5" id="community">
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <ol class="carousel-indicators">
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></li>
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="../img/cliente1.jpg" class="d-block w-100" alt="Foto cliente1">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>@charosainz</h5>
                    </div>
                </div>
                <div class="carousel-item">
                <img src="../img/cliente2.jpg" class="d-block w-100" alt="foto cliente2">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>@thomasquinteroz</h5>
                    </div>
                </div>
                <div class="carousel-item">
                <img src="../img/cliente3.jpg" class="d-block w-100" alt="foto cliente3">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>@cande_molinasss</h5>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </a>
        </div>
    </div>
        `;
	},
};

const ErrorComponent = {
	render: () => {
		return `
			<h1 class="py-5">Error</h1>
			<p>La página que estás buscando no existe</p>
		`;
	},
};

const routes = [
	{ path: "/", component: HomeComponent },
	{ path: "/burger", component: BurgerComponent },
	{ path: "/promos", component: PromosComponent },
	{ path: "/teamstore", component: TeamStoreComponent },
	{ path: "/story", component: StoryComponent },
	{ path: "/community", component: CommunityComponent },
];

function obtenerPath() {
	return location.hash.slice(1) || '/';
}

function obtenerComponent(path) {
	return routes.find(route => route.path.match(new RegExp(`^\\${path}$`, 'gm')));
}

function router() {
	const path = obtenerPath();

	const { component = ErrorComponent } = obtenerComponent(path) || {};

	const divApp = document.querySelector("#app");
	divApp.innerHTML = component.render();
}

//Selectors
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const listaProductos = document.querySelector("#lista-productos");
const vaciarCarrito = document.querySelector("#vaciar-carrito");

let articulosCarrito = [];

let dataProductos;

/* Listeners */
document.addEventListener("DOMContentLoaded", () => {
	articulosCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
	insertarCarritoHTML();

	//lamada a BD local con Fetch - Async Function
	cargarBd();

	//Llamada a BD local con AJAX
	/*
	$.ajax({
		url: "/js/productos.json",
		success: function (data, status, xhr) {
			console.log("Enlace a BD correcto");
			dataProductos = data;
		},
		error: function (xhr, status, errorThrown) {
			console.log("Enlace a Bd .json Inexistente");
		},
	});
	*/
});

listaProductos.addEventListener("click", agregarProducto);

$("#carrito").click(carrito, quitarProducto);

$("#vaciar-carrito").click(vaciarCarrito, borrarCarrito);

$("#formulario").on("submit", filtrarProductos);

$("#pagar").click("pagar", pagoTarjeta);

$(".nosotroStory").fadeIn(6000, animacionFade);

// Funciones

//llamada a BD local con Fetch - async Function
async function consultarBd() {
	const resultado = await fetch("../js/productos.json");
	let datos = await resultado.json();
	dataProductos = datos;
}

function cargarBd() {
	consultarBd();
}

function animacionFade() {
	$(".nosotroStory").hide(6000, animacionFade2);
	function animacionFade2() {
		$(".nosotroStory").slideDown(6000);
	}
}

function pagoTarjeta() {
	console.log("se realizara el pago con tarjeta Visa");
}

function cargarListaProductos(productos) {
	console.log("Se ejecuta cargarListaProductos");
	productos.forEach((producto, index) => {
		const { nombre, imagen, precio, id, tipo, description } = producto;

		const divCard = document.createElement("div");
		divCard.classList.add("col-12", "col-md-3", "py-4");
		divCard.innerHTML = `
			<div class="card col-12 col-md-3 py-4" style="width: 16rem;">
                <img src="${imagen}" class="card-img-top" alt="Birra image">
                <div class="card-body">
                <h4 class="card-title text-justify text-center blanco">${nombre}</h4>
                <h6 class="card-subtitle mb-2 text-muted text-center">${tipo}</h6>
                <p class="card-text text-justify blanco">
                ${description}</p>
                <p class="precio blanco"> $ <span>${precio}</span></p>
                <a href="#" class="btn btn-outline-light agregar-carrito" data-id="${id}">Agregar  <i class="fas fa-shopping-basket"></i></a>
                </div>
            </div>
		`;
		if (index % 4 === 0) {
			const row = document.createElement("div");
			row.classList.add("row");

			listaProductos.appendChild(row);
			row.appendChild(divCard);
		} else {
			const row = document.querySelector("#lista-productos .row:last-child");
			row.appendChild(divCard);
		}
	});
}

function filtrarProductos(e) {
	e.preventDefault();

	const busqueda = $("#buscador").val();

	const resultado = dataProductos.filter((producto) =>
		producto.nombre.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase())
	);

	limpiarProductos();
	cargarListaProductos(resultado);
}

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

	function comprobar() {
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
	}
	comprobar();
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
				<a href="#" class="" id="menosProducto"><i class="fas fa-minus menosProducto" data-id="${id}" ></i></a>  ${cantidad}  <a href="#" class="" ><i class="fas fa-plus masProducto"></i></a>
			</td>
			<td>
				<a href="#" class="" > <i class="far fa-trash-alt borrar-producto rojo" data-id="${id}"></i> </a>
			</td>
		`;

		contenedorCarrito.appendChild(row);
	});
}

function limpiarCarrito() {
	while (contenedorCarrito.firstChild) {
		contenedorCarrito.removeChild(contenedorCarrito.firstChild);
	}
}

function limpiarProductos() {
	while (listaProductos.firstChild) {
		listaProductos.removeChild(listaProductos.firstChild);
	}
}
// Cuenta Regresiva
$('.contador').countdown('2021/02/20 10:00:00', function(event){
    $("#dias").html(event.strftime("%D"));
    $('#horas').html(event.strftime('%H'));
    $('#minutos').html(event.strftime('%M'));
    $('#segundos').html(event.strftime('%S'));
});

