//Numbers greater than 1000 show an Alert.

var numeroId = prompt ("Escribe tu numero de ID");
var numeroId = parseInt(numeroId);

if (numeroId <= 1000) {
    console.log("El usuario " + numeroId + " a iniciado sesion");
}
else{
    alert("El ID de usuario no existe");
    console.log("El usuario es un invitado");
}


//Between 10 and 50 years show Alert.

var edad = prompt("Escriba su edad");
var edad = parseInt(edad);

if((edad >= 10) && (edad <= 50)){
    alert("Bienvenido al sistema");
    console.log("Usuario " + numeroId + " dentro del rango de edad");
}
else{
    alert("Tu edad no te permite entrar al sistema");
    console.log("Usiario fuera de rango de edad");
}

//Set language with Hello.

var idioma = prompt("Escriba   Hola    en el idioma que desea trabajar");
if(idioma == "Hola") {
    console.log("Trabajara en idioma Español.");
    alert("Idioma Español seleccionado.")
}
else{
    alert("No se pudo detectar el idioma");
    console.log("Trabajara en idioma predefinido")
}


