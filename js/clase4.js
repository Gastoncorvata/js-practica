
//Selector
const precioEfectivo = Number(document.querySelector(".precioEfectivo").value);
const precioCuotas = Number(document.querySelector(".precioCuotas").value);
const cantidadCuotas = Number(document.querySelector("#cuotas").value);
const volcarDatos = document.querySelector("#volcarDatos");
const calcular = document.querySelector("#btn-calcular");

console.log(precioEfectivo);
console.log(precioCuotas);
console.log(cantidadCuotas);



$.ajax({
    url: "https://apis.datos.gob.ar/series/api/series/?ids=431.1_EXPECTATIVDIO_M_0_0_30_56&limit=5000&start_date=2020-07-01&format=json",
    dataType: "Json",

    success: function(result){
        const inflacion = Number(result.data[1][1]);
        const fecha = result.data[1][0];
        console.log(`Inflacion calculada en referencia a la proyeccion del ${fecha}`);
        console.log(`La inflacion total anual proyectada es de ${inflacion} %`);
    }
})

//Listeners
calcular.addEventListener("click"(calculos()));

// Functions
function calculos() {
	function calculoA() {
		var calculo1 = precioCuotas / cantidadCuotas;
		console.log(calculo1);
		const row = document.createElement(div);
		row.innerHTML = `
        <p class="text-bolder text-black-50 text-center">"Para una compra en Efectivo de ${calculo1}"</p>
        `;
		volcarDatos.appendChild(row);
	}

	function calculoB() {
		var calculo2 = precioCuotas / cantidadCuotas;
		console.log(calculo2);
		const row = document.createElement(div);
		row.innerHTML = `
        <p class="text-bolder text-black-50 text-center">"Para una compra en Efectivo de ${calculo1}"</p>
        `;
		volcarDatos.appendChild(row);
	}

	calculo2 = (precioEfectivo / cantidadCuotas) * inflacion;

	if (calculo1 > calculo2) {
	} else {
	}
}
