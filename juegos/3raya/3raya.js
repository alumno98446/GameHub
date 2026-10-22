$(document).ready(function () {

    const celdas = $(".celda");

    let turnoActual = "X";
    let juegoTerminado = false;

    // Posiciones que hacen tres en raya: 
    // 3 filas, 3 columnas y 2 diagonales
    const combinacionesGanadoras = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];


    // Al pulsar una casilla
    celdas.on("click",
        function () {

            if ($(this).text() !== "" || juegoTerminado) {
                return;
            }

            $(this).text(turnoActual);
            if (turnoActual === "X") {
                $(this).addClass("ficha-x");
            } else {
                $(this).addClass("ficha-o");
            }

            // ¿Ha ganado alguien con esta jugada?
            if (hayGanador()) {
                $("#mensaje-final")
                    .text(`¡Ha ganado ${turnoActual}!`)
                    .removeClass("d-none alert-warning")
                    .addClass("alert-success");
                juegoTerminado = true;
                return;
            }

            if (tableroLleno()) {
                $("#mensaje-final")
                    .text("¡Empate!")
                    .removeClass("d-none alert-success")
                    .addClass("alert-warning");
                juegoTerminado = true;
                return;
            }

            if (turnoActual === "X") {
                turnoActual = "O";
            } else {
                turnoActual = "X";
            }
            $("#turno-actual").text(turnoActual);
        });

    function hayGanador() {
        for (let i = 0; i < combinacionesGanadoras.length; i++) {
            const combinacion = combinacionesGanadoras[i];

            const valorA = celdas.eq(combinacion[0]).text();
            const valorB = celdas.eq(combinacion[1]).text();
            const valorC = celdas.eq(combinacion[2]).text();

            if (valorA !== "" && valorA === valorB && valorB === valorC) {
                // Marcamos las 3 casillas de la línea ganadora
                celdas.eq(combinacion[0]).addClass("ganadora");
                celdas.eq(combinacion[1]).addClass("ganadora");
                celdas.eq(combinacion[2]).addClass("ganadora");
                return true;
            }
        }
        return false;
    }

    function tableroLleno() {
        for (let i = 0; i < celdas.length; i++) {
            if (celdas.eq(i).text() === "") {
                return false;
            }
        }
        return true;
    }

    // Reiniciar: vaciamos las casillas y volvemos al estado inicial
    $("#btn-reiniciar").on("click", 
        function () {
        celdas.text("").removeClass("ficha-x ficha-o");
        turnoActual = "X";
        juegoTerminado = false;
        $("#turno-actual").text(turnoActual);
        celdas.text("").removeClass("ficha-x ficha-o ganadora");
        $("#mensaje-final").text("").addClass("d-none");
    });



});
