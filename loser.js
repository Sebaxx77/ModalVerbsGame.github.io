document.addEventListener("DOMContentLoaded", function () {
    const txtPuntaje = document.querySelector("#puntos");
    const nombre = document.querySelector("#nombre");
    const nombreJugador = document.querySelector("#nombre-jugador");
    const totalAcertadas = document.querySelector("#total-acertadas");
    const btnComenzar = document.querySelector("#btn-comenzar");

    // Obtener el nombre del jugador desde localStorage
    const nombreJugadorLS = localStorage.getItem("nombre");

    // Si no hay nombre guardado, redirigir al inicio
    if (!nombreJugadorLS) {
        location.href = "index.html"; // Redirigir al inicio si no hay nombre guardado
        return; // Salir del script si no hay nombre
    }

    // Mostrar el nombre del jugador
    nombre.innerHTML = nombreJugadorLS;

    // Obtener el puntaje total del jugador desde localStorage
    const puntajeTotal = parseInt(localStorage.getItem("puntaje-total")) || 0;

    // Mostrar el puntaje total en el elemento correspondiente
    txtPuntaje.innerHTML = puntajeTotal;

    // Mostrar el total de respuestas acertadas
    totalAcertadas.innerHTML = puntajeTotal;

    // Evento para reiniciar el juego (volver al inicio)
    btnComenzar.addEventListener("click", function () {
        location.href = "index.html"; // Redirigir al inicio al hacer clic en el botón
    });
});
