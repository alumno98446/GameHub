$(document).ready(

    function () {

        const palabras = [
            "JAVASCRIPT",
            "NAVEGADOR",
            "TECLADO",
            "PANTALLA",
            "ORDENADOR",
            "VARIABLE",
            "PROGRAMA",
            "SERVIDOR",
            "INTERNET",
            "ESTILOS"
        ];
        let indice = 0;
        let palabraSecreta = palabras[indice];
        let juegoTerminado = false;
        let fallos = 0;
        const abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

        for (let i = 0; i < palabraSecreta.length; i++) {
            $("#palabra").append(`<span class="hueco"></span>`);
        }

        for (let i = 0; i < abecedario.length; i++) {
            $("#teclado").append(`<button type="button" class="btn tecla-ahorcado">${abecedario[i]}</button>`);
        }



        $(".tecla-ahorcado").on("click", function () {

            if (juegoTerminado) {
                return;
            }

            const letra = $(this).text();
            let acierto = false;

            for (let i = 0; i < palabraSecreta.length; i++) {

                if (palabraSecreta[i] === letra) {
                    $(`#palabra span:eq(${i})`).text(letra);
                    acierto = true;
                }
            }
            if(acierto){
                $(this).addClass("acertada");

                if (palabraCompleta()) {
                    $("#mensaje")
                        .text("¡Has ganado!")
                        .removeClass("d-none alert-danger")
                        .addClass("alert-success");
                    juegoTerminado = true;
                }

            }else{
                $(this).addClass("fallada");
                fallos++;
                $("#fallos").text(fallos);
                $(".muneco").eq(fallos - 1).removeClass("d-none");

                if (fallos === 6) {
                    $("#mensaje")
                        .text(`Has perdido. La palabra era ${palabraSecreta}`)
                        .removeClass("d-none alert-success")
                        .addClass("alert-danger");
                    juegoTerminado = true;
                }

            }
            $(this).prop("disabled", true);
        })

        function palabraCompleta() {
            for (let i = 0; i < $(".hueco").length; i++) {
                if ($(".hueco").eq(i).text() === "") {
                    return false;
                }
            }
            return true;
        }
    });
