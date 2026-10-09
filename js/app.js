// ====
// RETO 1: MODO OSCURO INTERACTIVO
// ====

// 1. SELECCIÓN DE ELEMENTOS DEL DOM
// [Comentario obligatorio: Explica aquí con tus palabras qué hace getElementById y por qué le pasamos 'btn-toggle-tema']
// Usamos getElementById para buscar y seleccionar un elemento específico del HTML utilizando su atributo ID único. Le pasamos 'btn-toggle-tema' porque ese es el identificador exacto que le asignamos al botón en el HTML para poder controlarlo desde JavaScript[cite: 1, 2].
const btnTema = document.getElementById('btn-toggle-tema');

// [Comentario obligatorio: Explica por qué seleccionamos el body directamente con document.body]
// Seleccionamos document.body directamente porque es la etiqueta principal que contiene toda la estructura visible de la página, lo que nos permite cambiar el color de fondo y del texto globalmente al activar el modo oscuro.
const body = document.body;

// 2. MANEJO DE EVENTOS
// [Comentario obligatorio: Explica qué es el evento 'click' y qué papel juega la función anónima que le pasamos]
// El evento 'click' detecta cuando el usuario presiona el botón con el ratón o la pantalla táctil. La función anónima actúa como un contenedor de instrucciones que se ejecutará únicamente en el preciso instante en que ocurra dicho clic[cite: 2].
btnTema.addEventListener('click', function() {
    
    // [Comentario obligatorio: Explica qué hace exactamente el método classList.toggle('tema-oscuro')]
    // El método classList.toggle('tema-oscuro') revisa si la clase CSS 'tema-oscuro' está presente en el body; si no la tiene, la agrega, y si ya la tiene, la elimina, funcionando como un interruptor[cite: 2, 3].
    body.classList.toggle('tema-oscuro');

    // Cambiar el texto del botón dependiendo del estado
    if (body.classList.contains('tema-oscuro')) {
        btnTema.textContent = "Modo Claro";
    } else {
        btnTema.textContent = "Modo Oscuro";
    }
});


// ====
// RETO 2: SALUDO DINÁMICO
// ====

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
// [Comentario obligatorio: Explica la diferencia entre textContent e innerHTML y por qué usamos textContent aquí]
// textContent inserta únicamente texto plano de forma segura, mientras que innerHTML procesa etiquetas HTML. Usamos textContent aquí porque solo necesitamos inyectar un mensaje de texto limpio, evitando riesgos de seguridad como ataques de inyección de código[cite: 2].
textoSaludo.textContent = mensaje;