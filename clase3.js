let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

for (let i=0; i<7; i++){
    if(i==6){
        alert("Hoy es  " + dias[i] + "  septimo dia de la semana");
        console.log(dias[i] + " semana terminada");
    }else if(i % 2 == 0){
        alert(dias[i] + " es un dia par");
        console.log(dias[i] + "  es un dia par");
    }else{
        alert(dias[i]);
        console.log(dias[i]);
    }
}
