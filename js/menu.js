var menu = document.querySelectorAll('.opcionMenu');

for (let i = 0; i < menu.length; i++) {
    const elemento = menu[i];

    elemento.addEventListener('click', function(evento){
        let el = evento.target;

        ocultarTodo();

        el.classList.add('activo');
    });
    
} 



function ocultarTodo() {
    for (let i = 0; i < menu.length; i++) {
        const elemento = menu[i];
        elemento.classList.remove('activo');            
    }
}

