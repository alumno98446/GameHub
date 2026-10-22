$(document).ready(

    function () {
        // Al pulsar un filtro, se queda marcado en rosa
        $(".filtros .nav-link").on("click", 
        //el espacio entre filtros y nav-link es importante, 
        // ya que indica que nav-link está dentro de filtros

            function () {
                $(".filtros .nav-link").removeClass("active");
                $(this).addClass("active");
                const filtro = $(this).data("filtro");
                const juegos = $(".juego");

                for (let i = 0; i < juegos.length; i++) {
                    const juego = juegos.eq(i);
                    const categoria = juego.data("categoria");

                    if (filtro === "todos" || categoria === filtro) {
                        juego.removeClass("d-none");
                    } else {
                        juego.addClass("d-none");
                    }
                }

            }
        );
    }
);
