$(document).ready(function () {

    $(".paginacion-enigmas .page-link").on("click", function () {
        $(".paginacion-enigmas .page-item").removeClass("active");
        $(this).parent().addClass("active");

        const pagina = $(this).data("pagina");
        const cajas = $(".enigma");

        for (let i = 0; i < cajas.length; i++) {
            const caja = cajas.eq(i);

            if (caja.data("enigma") === pagina) {
                caja.removeClass("d-none");
            } else {
                caja.addClass("d-none");
            }
        }
    });

});
