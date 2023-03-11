var menu = document.querySelectorAll('.opcionMenu');
//var menu = document.getElementsByClassName('opcionMenu');//

//console.log(menu);//

// Iteramos los elementos del menu
for (let i = 0; i < menu.length; i++) {
    const elemento = menu[i]; // Guardo cada elemento en una constante
    console.log(elemento);

    // Asigno el evento Click al elemento de la iteracion
    elemento.addEventListener('click', function(evento){
        // Aca sucede la magia, aca estamos dentro del evento
        // Todo lo que escribas aca adentro el evento lo va a reproducir.
        let el = evento.target;
        

        //con este for si alguno de los elementos tiene la clase activo, se la quito
        ocultarTodo();

        //una vez que ya removió todo, le asigno la clase activo
        el.classList.add('activo');


        // Aca ya se termino el evento.
    });
    
    
} //Aca ya se termino la iteracion






function ocultarTodo() {
    for (let i = 0; i < menu.length; i++) {
        const elemento = menu[i];
        elemento.classList.remove('activo');            
    }
}

