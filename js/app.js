// =======================================================
// RETO 1: MODO OSCURO INTERACTIVO
// =======================================================

// 1. SELECCIÓN DE ELEMENTOS DEL DOM
// Este comando busca y recupera del documento HTML el elemento único que posee el identificador 'btn-toggle-tema' para vincularlo a una constante y controlarlo desde la lógica interactiva.
const btnTema = document.getElementById('btn-toggle-tema');

// Almacenamos directamente el elemento body de la página para gestionar de forma general los cambios de estilo visual en toda la estructura cuando se active el modo oscuro.
const body = document.body;

// 2. MANEJO DE EVENTOS
// El método addEventListener se encarga de escuchar cuando el usuario presiona el botón. La función anónima funciona como un bloque contenedor de acciones que se ejecutará únicamente en el momento exacto en que ocurra el evento 'click'.
btnTema.addEventListener('click', function() {
    
    // Este método verifica si la clase 'tema-oscuro' está presente en el body; si no la tiene la incorpora, y si ya la posee la retira, funcionando como un conmutador o interruptor.
    body.classList.toggle('tema-oscuro');

    // Cambiar el texto del botón dependiendo del estado
    if (body.classList.contains('tema-oscuro')) {
        btnTema.textContent = "☀️Modo Claro";
    } else {
        btnTema.textContent = "🌙 Modo Oscuro";
    }
});


// =======================================================
// RETO 2: SALUDO DINÁMICO
// =======================================================

// 1. SELECCIÓN DEL CONTENEDOR
const textoSaludo = document.getElementById('saludo-tiempo-real');

// 2. LÓGICA DE TIEMPO
const fechaActual = new Date();
const horaActual = fechaActual.getHours();
let mensaje = "";

if (horaActual >= 6 && horaActual < 12) {
    mensaje = "¡Buenos días! Espero que tengas una excelente mañana.";
} else if (horaActual >= 12 && horaActual < 18) {
    mensaje = "¡Buenas tardes! Gracias por visitar mi perfil.";
} else {
    mensaje = "¡Buenas noches! Descubre mi trabajo.";
}

// 3. INYECCIÓN EN EL DOM
// textContent se emplea para insertar texto plano de manera completamente segura dentro de un elemento. Se prefiere frente a innerHTML porque este último procesa etiquetas de código, previniendo posibles brechas o inyecciones maliciosas.
textoSaludo.textContent = mensaje;
if (body.classList.contains('tema-oscuro')) {
        btnTema.textContent = "Modo Claro";
    } else {
        btnTema.textContent = "Modo Oscuro";
    }