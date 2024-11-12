const txtPuntaje = document.querySelector("#puntos");
const nombre = document.querySelector("#nombre");
const nombreJugador = document.querySelector("#nombre-jugador");
const puntajeFinal = document.querySelector("#puntaje-final");
const totalAcertadas = document.querySelector("#total-acertadas");
const btnComenzar = document.querySelector("#btn-comenzar");

// Obtener el nombre del jugador y el puntaje total
nombre.innerHTML = localStorage.getItem("nombre");
nombreJugador.innerHTML = localStorage.getItem("nombre");

// Mostrar el puntaje total correcto
const puntajeTotal = parseInt(localStorage.getItem("puntaje-total")) || 0;
txtPuntaje.innerHTML = puntajeTotal;


// Calcular y mostrar el total de respuestas correctas y no correctas
const totalPreguntas = 20; // Cambia esto al número total de preguntas en tu juego
const correctas = puntajeTotal; // Puntaje total es igual a respuestas correctas

totalAcertadas.innerHTML = correctas;

// Evento para volver al inicio
btnComenzar.addEventListener("click", () => {
    location.href = "index.html";
});


