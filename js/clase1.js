//Nombre
let nombre = prompt ("Escribe tu nombre, por favor");
let apellido = prompt ("Apellido?");
console.log( "Usuario " + nombre + " "+  apellido);
alert("Hola " + nombre  +" "+  apellido + " gracias por ingresar");

//edad
let edad = prompt ("Escribe tu edad");
edad = parseInt(edad);
//imprime edad
console.log("Tiene " +  edad + " años");

//dni
let dni = prompt ("Ingresa tu DNI");
dni = parseInt(dni)
//imprime dni
console.log("DNI numero " + dni);

//calcula y crea id
let id = (dni - (dni - edad * 7));
//imprime id
console.log("registrado con el ID " + id);
alert("tu ID de usuario es " + id);

//finaliza
console.log("Usuario " +  nombre  +" "+   apellido + " fue registrado con exito");
alert("Registro finalizado con exito, muchas gracias")


