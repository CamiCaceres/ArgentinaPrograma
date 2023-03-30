const experiencia = {
    "google" : "Google, LLC es una compañía principal subsidiaria de la estadounidense Alphabet la cual se especializa en productos y servicios relacionados con internet, software, dispositivos electrónicos y otras tecnologías. <br><br>Desarrollé soluciones de software siguiendo el siclo de vida del desarrollo: documentar los requisitos de intormación, consultar con los usuarios, investigar el flujo de sistemas, el uso de datos, los procesos de trabajo y estudiar áreas problemáticas.",
    "amazon" : "Amazon.com, Inc. es una corporación estadounidense de comercio electrónico y servicios de computación en la nube a todos los niveles con sede en la ciudad de Seattle, Washington. <br> <br> Determiné la viabilidad operativa mediante la evaluación del análisis, la definición del problema, los requisitos, el desarrollo de la solución y las soluciones propuestas.",
    "microsoft" : "Microsoft Corporation es una empresa tecnológica multinacional estadounidense que produce software de computadora, productos electrónicos de consumo, computadoras personales y servicios relacionados. <br><br>Realicé análisis del sistemá con el fin de recomendar cambios en políticas y procedimientos. Configuré nuevos sistemas de IT, redes e intranets para clientes",
    "apple" : "Apple, Inc. es una empresa tecnológica estadounidense que diseña y produce equipos electrónicos, software y servicios en línea. Asesoré ingenieros de software junior. <br> <br>Desarrollé documentación, diagramas de flujo, diseños, diagramas gráficos y código."
}


const myModalEl = document.getElementById('ventanaExperiencia')

myModalEl.addEventListener('show.bs.modal', function(event) {

    let boton = event.relatedTarget;
    let empresa = boton.dataset.empresa;

    document.getElementById('ventanaExperienciaTitulo').innerHTML = capitalize(empresa);

    const divTexto = document.getElementById('ventanaExperienciaTexto')
    divTexto.innerHTML = experiencia[empresa];

})



function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}