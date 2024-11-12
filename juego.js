//Arreglo que contiene las preguntas
const preguntas = [
  {
    id: 1,
    categoria: "general",
    titulo: "How should you introduce yourself to a new colleague?",
    opcionA: "You can ignore them.",
    opcionB: "You should smile and say your name.",
    opcionC: "You must leave the room.",
    correcta: "b",
  },
  {
    id: 2,
    categoria: "general",
    titulo: "What can you do if you want to get to know your team better?",
    opcionA: "You can invite them for coffee.",
    opcionB: "You might stay in silent.",
    opcionC: "You should never talk to them.",
    correcta: "a",
  },
  {
    id: 3,
    categoria: "general",
    titulo: "When meeting someone new, what should you remember to do?",
    opcionA: "You must avoid eye contact.",
    opcionB: "You might look at your phone.",
    opcionC: "You should listen carefully.",
    correcta: "c",
  },
  {
    id: 4,
    categoria: "general",
    titulo: "If you have a problem, who could you talk to for help?",
    opcionA: "You could talk to your manager.",
    opcionB: "You must keep it to yourself.",
    opcionC: "You might talk to a stranger.",
    correcta: "a",
  },
  {
    id: 5,
    categoria: "general",
    titulo: "How should you show appreciation to your coworkers?",
    opcionA: "You can complain about your tasks.",
    opcionB: "You should say thank you when they help you.",
    opcionC: "You must ignore their help.",
    correcta: "b",
  },
  {
    id: 6,
    categoria: "musica",
    titulo: "What should you do if you arrive late to work?",
    opcionA: "You might ignore it.",
    opcionB: "You can leave early the next day.",
    opcionC: "You should apologize to your manager.",
    correcta: "c",
  },
  {
    id: 7,
    categoria: "musica",
    titulo: "If you lose a work tool, what can you do?",
    opcionA: "You should keep it a secret.",
    opcionB: "You can tell your supervisor right away.",
    opcionC: "You might buy a new one without asking.",
    correcta: "b",
  },
  {
    id: 8,
    categoria: "musica",
    titulo: "What should you do if you suspect someone is stealing?",
    opcionA: "You should report it to security.",
    opcionB: "You must confront the person directly.",
    opcionC: "You can just ignore it.",
    correcta: "a",
  },
  {
    id: 9,
    categoria: "musica",
    titulo: "If you regularly forget to complete tasks, what should to do?",
    opcionA: "You can blame others.",
    opcionB: "You might stop caring about your work.",
    opcionC: "You should make a checklist.",
    correcta: "c",
  },
  {
    id: 10,
    categoria: "musica",
    titulo:
      "When you notice a coworker being consistently late, what can you do?",
    opcionA: "You should ignore the situation.",
    opcionB: "You might ignore that.",
    opcionC: "You can talk to them about it.",
    correcta: "c",
  },
  {
    id: 11,
    categoria: "programacion",
    titulo: "What should you do if you see a safety problem at work?",
    opcionA: "You should tell your supervisor.",
    opcionB: "You might try to fix it yourself.",
    opcionC: "You can ignore it.",
    correcta: "a",
  },
  {
    id: 12,
    categoria: "programacion",
    titulo: "How often should you join to safety training?",
    opcionA: "You can skip training completely.",
    opcionB: "You should go to every training session.",
    opcionC: "You might go only if you want.",
    correcta: "b",
  },
  {
    id: 13,
    categoria: "programacion",
    titulo: "What can you do to stay healthy at work?",
    opcionA: "You must work without stopping.",
    opcionB: "You can take breaks.",
    opcionC: "You might eat junk food all day.",
    correcta: "b",
  },
  {
    id: 14,
    categoria: "programacion",
    titulo: "If you have a health issue, what should you do?",
    opcionA: "You should tell your supervisor and go to the doctor.",
    opcionB: "You might ignore it.",
    opcionC: "You can keep it secret.",
    correcta: "a",
  },
  {
    id: 15,
    categoria: "programacion",
    titulo: "What should you wear for safety in a risky area?",
    opcionA: "You should wear safety gear.",
    opcionB: "You might not wear anything special.",
    opcionC: "You can wear normal clothes.",
    correcta: "a",
  },
  {
    id: 16,
    categoria: "deportes",
    titulo: "What should you do to learn something new at work?",
    opcionA: "You might pretend to know everything.",
    opcionB: "You can avoid asking for help.",
    opcionC: "You should ask questions when you're unsure.",
    correcta: "c",
  },
  {
    id: 17,
    categoria: "deportes",
    titulo: "How can you practice your skills regularly?",
    opcionA: "You can set aside time each week for practice.",
    opcionB: "You might wait for someone to tell you to practice.",
    opcionC: "You should only practice when you feel like it.",
    correcta: "a",
  },
  {
    id: 18,
    categoria: "deportes",
    titulo: "What might you do to stay motivated to learn?",
    opcionA: "You can give up when it gets hard.",
    opcionB: "You might set small, achievable goals.",
    opcionC: "You could ignore your progress.",
    correcta: "b",
  },
  {
    id: 19,
    categoria: "deportes",
    titulo: "What can you do to learn from your mistakes?",
    opcionA: "You can review what went wrong and fix it.",
    opcionB: "You could blame others for them.",
    opcionC: "You might ignore your mistakes.",
    correcta: "a",
  },
  {
    id: 20,
    categoria: "deportes",
    titulo: "How might you stay organized at work?",
    opcionA: "You should ignore deadlines.",
    opcionB: "You might use a planner or app to track tasks.",
    opcionC: "You can keep everything in your head.",
    correcta: "b",
  },
];

// Elementos HTML
const txtPuntaje = document.querySelector("#puntos");
const nombre = document.querySelector("#nombre");
const tiempoRestante = document.querySelector("#tiempo-restante"); // Elemento donde se mostrará el tiempo
const btnSiguiente = document.querySelector("#siguiente"); // Botón "Siguiente" existente

nombre.innerHTML = localStorage.getItem("nombre");
let numPreguntaActual = 0;

// Recupero el puntaje en caso que ya esté jugando
let puntajeTotal = 0;
if (!localStorage.getItem("puntaje-total")) {
  puntajeTotal = 0;
  txtPuntaje.innerHTML = puntajeTotal;
} else {
  puntajeTotal = parseInt(localStorage.getItem("puntaje-total"));
  txtPuntaje.innerHTML = puntajeTotal;
}

// Cargar las preguntas del tema que eligió
const categoriaActual = localStorage.getItem("categoria-actual");
const preguntasCategoria = preguntas.filter(
  (pregunta) => pregunta.categoria === categoriaActual
);

// Variable para el temporizador
let tiempo = 20; // Tiempo de 20 segundos
let temporizador;
let tiempoAgotado = false; // Indicador si el tiempo se agotó

// Función para cargar la siguiente pregunta
function cargarSiguientePregunta(num) {
  // Tomo los elementos donde se cargarán los datos de la pregunta
  const numPregunta = document.querySelector("#num-pregunta");
  const txtPregunta = document.querySelector("#txt-pregunta");
  const opcionA = document.querySelector("#a");
  const opcionB = document.querySelector("#b");
  const opcionC = document.querySelector("#c");

  // Mostrar el número de la pregunta y la pregunta actual
  numPregunta.innerHTML = num + 1;
  txtPregunta.innerHTML = preguntasCategoria[num].titulo;
  opcionA.innerHTML = preguntasCategoria[num].opcionA;
  opcionB.innerHTML = preguntasCategoria[num].opcionB;
  opcionC.innerHTML = preguntasCategoria[num].opcionC;

  // Reiniciar el tiempo y mostrarlo en pantalla
  tiempo = 20; // Se asegura que el tiempo se reinicie a 20 segundos
  tiempoRestante.innerHTML = `Time remaining: ${tiempo} seconds`;

  // Iniciar el temporizador para la pregunta actual
  if (temporizador) {
    clearInterval(temporizador); // Limpiar el temporizador anterior si existe
  }
  temporizador = setInterval(actualizarTiempo, 1000);

  // Mostrar el botón "Siguiente" oculto por defecto
  btnSiguiente.style.display = "none"; // Ocultar el botón "Siguiente" al inicio

  // Agregar un eventListener a cada botón de respuesta
  const botonesRespuesta = document.querySelectorAll(".opcion");
  botonesRespuesta.forEach((opcion) => {
    opcion.removeEventListener("click", (e) => {}); // Quitar eventos anteriores
    opcion.classList.remove("correcta");
    opcion.classList.remove("incorrecta");
    opcion.classList.remove("no-events");
  });

  botonesRespuesta.forEach((opcion) => {
    opcion.addEventListener("click", agregarEventListenerBoton);
  });

  txtPuntaje.classList.remove("efecto");
}

// Función para actualizar el tiempo
function actualizarTiempo() {
  if (tiempo > 0 && !tiempoAgotado) {
    tiempo--; // Decrementar el tiempo
    tiempoRestante.innerHTML = `Time remaining: ${tiempo} seconds`;
  } else if (tiempo === 0 && !tiempoAgotado) {
    // Si se acaba el tiempo, detener el temporizador y mostrar mensaje
    clearInterval(temporizador);
    tiempoAgotado = true;

    // Mostrar mensaje en pantalla si el tiempo se ha agotado
    const mensajeFeedback = document.querySelector("#mensaje-feedback");
    mensajeFeedback.innerHTML = `Time's up! The correct answer is: ${
      preguntasCategoria[numPreguntaActual][
        "opcion" + preguntasCategoria[numPreguntaActual].correcta.toUpperCase()
      ]
    }.`;
    mensajeFeedback.style.color = "orange"; // Naranja para indicar que se acabó el tiempo

    // Deshabilitar los botones de respuesta después de que se termine el tiempo
    const botonesRespuesta = document.querySelectorAll(".opcion");
    botonesRespuesta.forEach((opcion) => {
      opcion.classList.add("no-events"); // Desactiva los botones
    });

    // Mostrar el botón "Siguiente"
    btnSiguiente.style.display = "block";
  }
}

// Función cuando se hace clic en una respuesta
function agregarEventListenerBoton(e) {
    // Detener el temporizador cuando el usuario responde
    clearInterval(temporizador);

    // Elemento donde se mostrará el mensaje de feedback (correcto o incorrecto)
    const mensajeFeedback = document.querySelector("#mensaje-feedback");

    // Limpiamos el mensaje anterior (si existe)
    mensajeFeedback.innerHTML = "";

    // Controlo si la respuesta es correcta
    if (e.currentTarget.id === preguntasCategoria[numPreguntaActual].correcta) {
        e.currentTarget.classList.add("correcta");
        puntajeTotal = puntajeTotal + 1;  // Sumar punto
        txtPuntaje.innerHTML = puntajeTotal;
        localStorage.setItem("puntaje-total", puntajeTotal);
        txtPuntaje.classList.add("efecto");

        // Mostrar el mensaje de respuesta correcta
        mensajeFeedback.innerHTML = "Correct answer!";
        mensajeFeedback.style.color = "green"; // Verde para respuesta correcta
    } else {
        e.currentTarget.classList.add("incorrecta");
        const correcta = document.querySelector("#" + preguntasCategoria[numPreguntaActual].correcta);
        correcta.classList.add("correcta");

        // Restar un punto si la respuesta es incorrecta, pero no si el puntaje es 0
        if (puntajeTotal > 0) {
            puntajeTotal = puntajeTotal - 1;
            txtPuntaje.innerHTML = puntajeTotal;
            localStorage.setItem("puntaje-total", puntajeTotal);

            // Agregar efecto de resta visual (rojo y aumento temporal del tamaño)
            txtPuntaje.classList.add("efecto-resta");
            
            // Eliminar el efecto después de 0.5 segundos
            setTimeout(() => {
                txtPuntaje.classList.remove("efecto-resta");
            }, 500);
        }

        // Mostrar mensaje en pantalla si la respuesta es incorrecta
        mensajeFeedback.innerHTML = `Incorrect answer! The correct answer is: ${preguntasCategoria[numPreguntaActual]["opcion" + preguntasCategoria[numPreguntaActual].correcta.toUpperCase()]}.`;
        mensajeFeedback.style.color = "black";  // Negro para incorrecto
    }

    // Deshabilitar los botones de respuesta después de que se haga clic
    const botonesRespuesta = document.querySelectorAll(".opcion");
    botonesRespuesta.forEach(opcion => {
        opcion.classList.add("no-events");  // Desactiva los botones
    });

    // Mostrar el botón "Siguiente"
    btnSiguiente.style.display = "block";
}

// Función para avanzar a la siguiente pregunta
function siguientePregunta() {
  // Limpiamos el mensaje de feedback al avanzar a la siguiente pregunta
  const mensajeFeedback = document.querySelector("#mensaje-feedback");
  mensajeFeedback.innerHTML = ""; // Borramos el mensaje anterior

  numPreguntaActual++;
  if (numPreguntaActual < preguntasCategoria.length) {
    cargarSiguientePregunta(numPreguntaActual); // Cargar siguiente pregunta
  } else {
    const categoriasJugadasLS = JSON.parse(
      localStorage.getItem("categorias-jugadas")
    );

    // Verificamos si las 4 categorías fueron completadas
    if (categoriasJugadasLS.length < 4) {
      location.href = "menu.html"; // Ir al menú
    } else {
      // Verificamos el puntaje para redirigir a la página correcta
      if (puntajeTotal >= 10) {
        location.href = "final.html"; // Redirigir a final.html si el puntaje es 10 o más
      } else {
        location.href = "loser.html"; // Redirigir a loser.html si el puntaje es menor de 10
      }
    }
  }

  // Ocultar el botón "Siguiente" para la siguiente pregunta
  btnSiguiente.style.display = "none";
  tiempoAgotado = false; // Reiniciar el indicador de tiempo agotado
}

// Asignar el evento de click al botón "Siguiente"
btnSiguiente.addEventListener("click", siguientePregunta);

// Llamar a la función para cargar la primera pregunta
cargarSiguientePregunta(numPreguntaActual);
