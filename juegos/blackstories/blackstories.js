$(document).ready(function () {

    // Al pulsar un número de la paginación, se muestra su enigma (la carta y sus preguntas)
    $(".paginacion-enigmas .page-link").on("click", function () {
        // Marcamos la página pulsada. En la paginación de Bootstrap, "active" va en el <li>, el padre del botón
        $(".paginacion-enigmas .page-item").removeClass("active");
        $(this).parent().addClass("active");

        // Leemos qué enigma toca y cogemos todo lo que pertenece a algún enigma
        const pagina = $(this).data("pagina");
        const enigmas = $(".enigma");

        // Recorremos cartas y listas de preguntas: solo se ve lo del enigma de esta página
        for (let i = 0; i < enigmas.length; i++) {
            const enigma = enigmas.eq(i);

            if (enigma.data("enigma") === pagina) {
                enigma.removeClass("d-none");
            } else {
                enigma.addClass("d-none");
            }
        }
    });

});
