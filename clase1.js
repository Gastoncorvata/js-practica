//Nombre
var nombre = prompt ("Escribe tu nombre, por favor");
//imprime nombre
console.log( "Usuario " + nombre);
alert("Hola " + nombre + " gracias por ingresar");

//edad
var edad = prompt ("Escribe tu edad");
//imprime edad
console.log("Tiene " + Number(edad) + " años");

//dni
var dni = prompt ("Ingresa tu DNI");
//imprime dni
console.log("DNI numero " + Number(dni));

//calcula y crea id
var id = (dni - (dni - edad * 7));
//imprime id
console.log("registrado con el ID " + id);
alert("tu ID de usuario es " + id);

//finaliza
console.log("Usuario " +  nombre +  " fue registrado con exito");
alert("Registro finalizado con exito, muchas gracias")


