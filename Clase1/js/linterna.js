let sonidoBatman = document.querySelector(".bati_encendido");
let sonidoBoton = document.querySelector(".bati_click");

let batman = document.querySelector(".batman");
let batmanBoton = document.querySelector(".bati_boton");

let estadoLinterna = "apagado";
// Evento

batmanBoton.addEventListener("click", controlarLinterna)

// Funciones

function controlarLinterna() {
    if (estadoLinterna == "apagado") {
        estadoLinterna = "encendido";
        sonidoLinterna();
        /*Efecto sonido*/
        batman.classList.add("batman-activo");
    } else {
        estadoLinterna = "apagado";
        sonidoLinterna();
        batman.classList.remove("batman-activo");
    }
}

function sonidoLinterna() {
    if (sonidoBatman.paused) {
        sonidoBoton.play();
        sonidoBatman.play();
    } else {
        sonidoBoton.play();
        sonidoBatman.pause();
        sonidoBatman.currentTime=0;
    }

}
